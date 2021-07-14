import React, { useContext } from "react";
import {
    setMaxSizeAction,
    setMinSizeAction,
} from "../../../../../actions/searchActions";
import { SearchContext } from "../../../../../context/SearchContext";

const SizeInput = () => {
    const { dispatchSearchData } = useContext(SearchContext);

    const onChangeSelectMinSize = (event) => {
        dispatchSearchData(setMinSizeAction(event.target.value));
    };

    const onChangeSelectMaxSize = (event) => {
        dispatchSearchData(setMaxSizeAction(event.target.value));
    };

    return (
        <div className="input price-input">
            <label htmlFor="size">גודל דירה (במ״ר)</label>
            <div className="inputs">
                <input
                    onChange={onChangeSelectMinSize}
                    type="number"
                    placeholder="מ-"
                    min="0"
                />
                <input
                    onChange={onChangeSelectMaxSize}
                    type="number"
                    placeholder="עד-"
                    min="0"
                />
            </div>
        </div>
    );
};

export default SizeInput;
