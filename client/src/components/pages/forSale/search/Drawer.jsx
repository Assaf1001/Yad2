import React, { Fragment, useContext, useState } from "react";
import {
    setKindAction,
    setKindAllAction,
    setKindCategoryAction,
} from "../../../../actions/searchActions";
import { SearchContext } from "../../../../context/SearchContext";
import Arrow from "./Arrow";
import CheckBoxButton from "./CheckBoxButton";
import DrawerItem from "./DrawerItem";

const Drawer = ({ list }) => {
    const { searchData, dispatchSearchData } = useContext(SearchContext);

    const [isOpen, setIsOpen] = useState(false);
    const [isListMarked, setIsListMarked] = useState(false);

    const onClickToggleIsOpen = () => {
        if (isOpen) setIsOpen(false);
        else setIsOpen(true);
    };

    const onClickSetKindArr = (event) => {
        if (
            event.target.nodeName !== "svg" &&
            event.target.nodeName !== "path"
        ) {
            if (list.key === "all") dispatchSearchData(setKindAllAction());
            else dispatchSearchData(setKindCategoryAction(list.key, list.list));

            if (isListMarked) setIsListMarked(false);
            else setIsListMarked(true);
        }
    };

    return (
        <div className="drawer">
            <div onClick={onClickSetKindArr} className="drawer-title">
                <div>
                    <CheckBoxButton isListMarked={isListMarked} />
                    <h6>{list.title}</h6>
                </div>
                {list.list && (
                    <div onClick={onClickToggleIsOpen}>
                        <Arrow isClicked={isOpen} />
                    </div>
                )}
            </div>
            {console.log(searchData)}
            {isOpen && (
                <div className="drawer-content">
                    <ul>
                        {list.list.map((listItem, i) => (
                            <DrawerItem
                                key={i}
                                parentKey={list.key}
                                listItem={listItem}
                                isListMarked={isListMarked}
                            />
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Drawer;
