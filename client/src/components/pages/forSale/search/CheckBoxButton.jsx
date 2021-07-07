import React from "react";
import icons from "../../../../icons/icons";

const CheckBoxButton = ({ isMarked, isListMarked }) => {
    return (
        <div
            className={
                isMarked || isListMarked
                    ? "check-box-button check-box-button__marked"
                    : "check-box-button"
            }
        >
            {icons.check}
        </div>
    );
};

export default CheckBoxButton;
