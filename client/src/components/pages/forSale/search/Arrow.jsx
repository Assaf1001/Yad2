import React from "react";

import icons from "../../../../icons/icons";

const Arrow = ({ isClicked = false }) => {
    return (
        <div className="arrow">
            {isClicked ? icons.arrowUp : icons.arrowDown}
        </div>
    );
};

export default Arrow;
