import React, { createRef, useContext, useState } from "react";
import { NewAddContext } from "../../../../../../context/NewAddContext";
import useOnClickOutsideClose from "../../../../../../hooks/useOnClickOutsideClose";
import { getStreet } from "../../../../../../server/addressAPI";
import StreetInputResultItem from "./CityInputResultItem";

const StreetInput = () => {
    const ref = createRef();
    const { newAddData } = useContext(NewAddContext);
    const [value, setValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [results, setResults] = useState([]);

    const onInputToggleIsOpen = (value) => {
        if (value.length > 0) setIsOpen(true);
        else setIsOpen(false);
    };

    const onInputSelectStreet = (value) => {
        setValue(value);
        if (value.length > 1)
            getStreet(newAddData.city + " " + value)
                .then((res) => setResults(res))
                .catch((err) => console.log(err));
    };

    useOnClickOutsideClose(ref, () => setIsOpen(false));

    return (
        <div>
            <label htmlFor="street">רחוב*</label>
            <input
                onChange={(event) => setValue(event.target.value)}
                onInput={(event) => {
                    onInputToggleIsOpen(event.target.value);
                    onInputSelectStreet(event.target.value);
                }}
                value={value}
                placeholder="הכנסת שם רחוב"
                autoComplete="off"
                type="text"
                id="city"
                disabled={!newAddData.city}
            />
            <div className="dropdown" ref={ref}>
                {isOpen &&
                    results.map((resultItem, i) => (
                        <StreetInputResultItem
                            key={i}
                            resultItem={resultItem}
                            setValue={setValue}
                            setIsOpen={setIsOpen}
                        />
                    ))}
            </div>
        </div>
    );
};

export default StreetInput;
