import React, { createRef, useState } from "react";
import useOnClickOutsideClose from "../../../../../hooks/useOnClickOutsideClose";
import Dropdown from "../Dropdown";
import Drawer from "../Drawer";
import kindInputData from "../data/kindInputData";

const KindInput = () => {
    const kindInputRef = createRef();

    const [isOpen, setIsOpen] = useState(false);

    const onClickToggleIsOpen = () => {
        if (isOpen) setIsOpen(false);
        else setIsOpen(true);
    };

    useOnClickOutsideClose(kindInputRef, () => {
        setIsOpen(false);
    });

    return (
        <div className="input kind-input" ref={kindInputRef}>
            <label htmlFor="kind">סוג נכס</label>
            <Dropdown
                isOpen={isOpen}
                onClickToggleIsOpen={onClickToggleIsOpen}
                title={kindInputData.title}
            >
                {kindInputData.data.map((listItem, i) => (
                    <Drawer key={i} list={listItem} />
                ))}
                <p onClick={onClickToggleIsOpen}>בחירה</p>
            </Dropdown>
        </div>
    );
};

export default KindInput;
