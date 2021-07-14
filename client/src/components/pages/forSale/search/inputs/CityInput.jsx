import React, { useContext, useState } from "react";
import { SearchContext } from "../../../../../context/SearchContext";
import { getAddress } from "../../../../../server/addressAPI";

const CityInput = () => {
    const { dispatchSearchData } = useContext(SearchContext);
    const [isOpen, setIsOpen] = useState(false);
    const [results, setResults] = useState([]);

    const onInputToggleIsOpen = (event) => {
        if (event.target.value.length > 0) setIsOpen(true);
        else setIsOpen(false);
    };

    const onInputSelectCity = (event) => {
        getAddress(event.target.value)
            .then((res) => setResults(res))
            .catch((err) => console.log(err));
    };

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
            />
            <div className="dropdown">
                <div className="dropdown-content">
                    {isOpen &&
                        results.map((res, i) => (
                            <p key={i}>
                                {res.address} {res.city}
                            </p>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default CityInput;
