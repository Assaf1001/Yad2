import React, { createRef, useState } from "react";
import { SearchContext } from "../../../../../context/SearchContext";
import useOnClickOutsideClose from "../../../../../hooks/useOnClickOutsideClose";
import { searchAutoComplete } from "../../../../../server/addressAPI";
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
            searchAutoComplete(value)
                .then((res) => setResults(res))
                .catch((err) => console.log(err));
    };

    useOnClickOutsideClose(ref, () => setIsOpen(false));

    return (
        <div className="input city-input">
            <label htmlFor="city">חפשו עיר או רחוב</label>
            <input
                onChange={(event) => setValue(event.target.value)}
                onInput={(event) => {
                    onInputToggleIsOpen(event.target.value);
                    onInputSelectCity(event.target.value);
                }}
                value={value}
                type="text"
                id="city"
                placeholder="לדוגמה: אשדוד"
                autoComplete="off"
            />
            <div className="dropdown" ref={ref}>
                <div className="dropdown-content">
                    {isOpen &&
                        results
                            .sort((a) => {
                                if (a.city === a.address + " ") return -1;
                                return 1;
                            })
                            .map((result, i) => (
                                <CityInputResultItem
                                    key={i}
                                    result={result}
                                    setValue={setValue}
                                    setIsOpen={setIsOpen}
                                />
                            ))}
                </div>
            </div>
        </div>
    );
};

export default CityInput;
