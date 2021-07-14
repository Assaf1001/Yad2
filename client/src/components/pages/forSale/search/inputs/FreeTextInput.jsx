import React, { useContext } from "react";
import { setFreeTextAction } from "../../../../../actions/searchActions";
import { SearchContext } from "../../../../../context/SearchContext";

const FreeTextInput = () => {
    const { dispatchSearchData } = useContext(SearchContext);

    const onChangeEnterFreeText = (event) => {
        const value = event.target.value;
        if (value.length > 0) dispatchSearchData(setFreeTextAction(value));
        else dispatchSearchData(setFreeTextAction(null));
    };

    return (
        <div className="input city-input">
            <label htmlFor="free-text">חיפוש חופשי</label>
            <input
                onChange={onChangeEnterFreeText}
                type="text"
                id="free-text"
            />
        </div>
    );
};

export default FreeTextInput;
