import React, { useContext, useState } from "react";
import { setKindAction } from "../../../../actions/searchActions";
import { SearchContext } from "../../../../context/SearchContext";
import CheckBoxButton from "./CheckBoxButton";

const DrawerItem = ({ parentKey, listItem, isListMarked }) => {
    const { dispatchSearchData } = useContext(SearchContext);
    const [isMarked, setIsMarked] = useState(false);

    const onClickSelectItem = () => {
        dispatchSearchData(setKindAction(parentKey, listItem));
        if (isMarked) setIsMarked(false);
        else setIsMarked(true);
    };

    return (
        <div onClick={onClickSelectItem} className="drawer-item">
            <CheckBoxButton isMarked={isMarked} isListMarked={isListMarked} />
            <li>{listItem}</li>
        </div>
    );
};

export default DrawerItem;
