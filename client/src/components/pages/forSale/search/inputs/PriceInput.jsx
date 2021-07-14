import React, { useContext } from "react";
import {
    setMaxPriceAction,
    setMinPriceAction,
} from "../../../../../actions/searchActions";
import { SearchContext } from "../../../../../context/SearchContext";

const PriceInput = () => {
    const { dispatchSearchData } = useContext(SearchContext);

    const onChangeSelectMinPrice = (event) => {
        dispatchSearchData(setMinPriceAction(event.target.value));
    };

    const onChangeSelectMaxPrice = (event) => {
        dispatchSearchData(setMaxPriceAction(event.target.value));
    };

    return (
        <div className="input price-input">
            <label htmlFor="price">מחיר</label>
            <div className="inputs">
                <input
                    onChange={onChangeSelectMinPrice}
                    type="number"
                    placeholder="ממחיר"
                    min="0"
                />
                <input
                    onChange={onChangeSelectMaxPrice}
                    type="number"
                    placeholder="עד מחיר"
                    min="0"
                />
            </div>
        </div>
    );
};

export default PriceInput;
