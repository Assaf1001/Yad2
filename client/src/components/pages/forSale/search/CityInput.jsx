import React, { useContext, useState } from "react";
import { SearchContext } from "../../../../context/SearchContext";

const CityInput = () => {
    const { dispatchSearchData } = useContext(SearchContext);
    const [isOpen, setIsOpen] = useState(false);

    const onInputToggleIsOpen = (event) => {
        if (event.target.value.length > 0) setIsOpen(true);
        else setIsOpen(false);
    };

    const onInputSelectCity = (event) => {};

    return (
        <div className="input city-input">
            <label htmlFor="city">חפשו עיר או רחוב</label>
            <input
                onInput={onInputToggleIsOpen}
                type="text"
                id="city"
                placeholder="לדוגמה: אשדוד"
                autoComplete="off"
            />
            <div className="dropdown">
                <div className="dropdown-content">
                    {isOpen && (
                        <div>
                            <p>asdaas</p>
                            <p>asdaas</p>
                            <p>asdaas</p>
                            <p>asdaas</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CityInput;
