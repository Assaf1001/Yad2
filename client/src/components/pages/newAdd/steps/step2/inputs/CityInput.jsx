import React, { createRef, useState } from "react";
import useOnClickOutsideClose from "../../../../../../hooks/useOnClickOutsideClose";
import { getCity } from "../../../../../../server/addressAPI";
import CityInputResultItem from "./CityInputResultItem";

const CityInput = () => {
    const ref = createRef();
    const [value, setValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [results, setResults] = useState([]);

    const onInputToggleIsOpen = (value) => {
        if (value.length > 0) setIsOpen(true);
        else setIsOpen(false);
    };

    const onInputSelectCity = (value) => {
        setValue(value);
        if (value.length > 1)
            getCity(value)
                .then((res) => setResults(res))
                .catch((err) => console.log(err));
    };

    useOnClickOutsideClose(ref, () => setIsOpen(false));

    return (
        <div>
            <label htmlFor="city">ישוב*</label>
            <input
                onChange={(event) => setValue(event.target.value)}
                onInput={(event) => {
                    onInputToggleIsOpen(event.target.value);
                    onInputSelectCity(event.target.value);
                }}
                value={value}
                placeholder="איפה נמצא הנכס?"
                autoComplete="off"
                type="text"
                id="city"
            />
            <div className="dropdown" ref={ref}>
                {isOpen &&
                    results.map((resultItem, i) => (
                        <CityInputResultItem
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

export default CityInput;
