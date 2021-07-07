import React, { useState } from "react";
import Arrow from "./Arrow";

import Drawer from "./Drawer";

const Dropdown = ({ title, data }) => {
    const [isOpen, setIsOpen] = useState(false);

    const onClickToggleIsOpen = () => {
        if (isOpen) setIsOpen(false);
        else setIsOpen(true);
    };

    return (
        <div className="dropdown">
            <button type="button" onClick={onClickToggleIsOpen}>
                <h5>{title}</h5>
                <Arrow isClicked={isOpen} />
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    {data.map((listItem, i) => (
                        <Drawer key={i} list={listItem} />
                    ))}
                    <p onClick={onClickToggleIsOpen}>בחירה</p>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
