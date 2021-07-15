import React, { useContext, useState } from "react";
import FloorInput from "./inputs/FloorInput";
import Properties from "./inputs/Properties";
import SizeInput from "./inputs/SizeInput";
import DateInput from "./inputs/DateInput";
import FreeTextInput from "./inputs/FreeTextInput";
import CheckBoxButton from "./CheckBoxButton";
import { SearchContext } from "../../../../context/SearchContext";
import { initSearchAction } from "../../../../actions/searchActions";

const AdvanceSearch = () => {
    const { searchData, dispatchSearchData } = useContext(SearchContext);
    const [isSelected, setIsSelected] = useState(false);

    const onClickToggleIsSelected = () => {
        if (isSelected) setIsSelected(false);
        else setIsSelected(true);
    };

    const onClickInitSearch = () => {
        dispatchSearchData(initSearchAction());
    };

    return (
        <div className="dropdown advance-search">
            <div className="dropdown-content">
                <Properties />
                <div className="part-2">
                    <FloorInput />
                    <SizeInput />
                    <DateInput />
                </div>
                <div className="part-2 part-3">
                    <FreeTextInput />
                    <div
                        className="towns-only"
                        onClick={onClickToggleIsSelected}
                    >
                        <CheckBoxButton isSelected={isSelected} />
                        <p>הצגת מושבים וקיבוצים בלבד</p>
                    </div>
                </div>
                <div className="part-2 part-4">
                    <button type="submit">חיפוש</button>
                    <button onClick={onClickInitSearch} type="reset">
                        נקה
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdvanceSearch;
