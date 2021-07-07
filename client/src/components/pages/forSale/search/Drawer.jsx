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
        }
    };

    return (
        <div className="drawer">
            <div onClick={onClickSetKindArr} className="drawer-title">
                <div>
                    <CheckBoxButton listKey={list.key} />
                    <h6>{list.title}</h6>
                </div>
                {list.list && (
                    <div onClick={onClickToggleIsOpen}>
                        <Arrow isClicked={isOpen} />
                    </div>
                )}
            </div>
            {isOpen && (
                <div className="drawer-content">
                    <ul>
                        {list.list.map((listItem, i) => (
                            <DrawerItem
                                key={i}
                                parentKey={list.key}
                                listItem={listItem}
                            />
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Drawer;
