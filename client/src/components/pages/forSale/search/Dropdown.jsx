import React from "react";

import Arrow from "./Arrow";

const Dropdown = (props) => {
    return (
        <div className="dropdown">
            <button type="button" onClick={props.onClickToggleIsOpen}>
                <h5>{props.title}</h5>
                <Arrow isClicked={props.isOpen} />
            </button>
            {props.isOpen && (
                <div className="dropdown-content">{props.children}</div>
            )}
        </div>
    );
};

export default Dropdown;
