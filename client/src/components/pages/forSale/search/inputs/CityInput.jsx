import React, { createRef, useContext, useEffect, useState } from "react";
import { SearchContext } from "../../../../../context/SearchContext";
import useOnClickOutsideClose from "../../../../../hooks/useOnClickOutsideClose";
import { searchAutoComplete } from "../../../../../server/addressAPI";
import CityInputResultItem from "./CityInputResultItem";

const CityInput = () => {
    const ref = createRef();
    const { searchData } = useContext(SearchContext);
    const [value, setValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [results, setResults] = useState([]);

    const onInputToggleIsOpen = (event) => {
        if (event.target.value.length > 0) setIsOpen(true);
        else setIsOpen(false);
    };

    const onInputSelectCity = (event) => {
        setValue(event.target.value);
        if (event.target.value.length > 1)
            searchAutoComplete(event.target.value)
                .then((res) => setResults(res))
                .catch((err) => console.log(err));
    };

    useOnClickOutsideClose(ref, () => setIsOpen(false));

    useEffect(() => {
        if (searchData.address === null) setValue();
    }, [searchData.address]);

    return (
        <div className="input city-input">
            <label htmlFor="city">חפשו עיר או רחוב</label>
            <input
                onInput={(event) => {
                    onInputToggleIsOpen(event);
                    onInputSelectCity(event);
                }}
                type="text"
                id="city"
                placeholder="לדוגמה: אשדוד"
                autoComplete="off"
                value={value}
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
