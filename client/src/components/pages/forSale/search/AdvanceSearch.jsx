import React, { useState } from "react";
import FloorInput from "./inputs/FloorInput";
import Properties from "./inputs/Properties";
import SizeInput from "./inputs/SizeInput";
import DateInput from "./inputs/DateInput";
import FreeTextInput from "./inputs/FreeTextInput";
import CheckBoxButton from "./CheckBoxButton";

const AdvanceSearch = () => {
    const [isSelected, setIsSelected] = useState(false);

    const onClickToggleIsSelected = () => {
        if (isSelected) setIsSelected(false);
        else setIsSelected(true);
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
                <div className="part-2">
                    <button type="submit">חפש</button>
                </div>
            </div>
        </div>
    );
};

export default AdvanceSearch;
