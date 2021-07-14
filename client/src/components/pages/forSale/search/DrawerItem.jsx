import React, { useContext } from "react";
import { setKindAction } from "../../../../actions/searchActions";
import { SearchContext } from "../../../../context/SearchContext";
import CheckBoxButton from "./CheckBoxButton";

const DrawerItem = ({ parentKey, listItem }) => {
    const { dispatchSearchData } = useContext(SearchContext);

    const onClickSelectItem = () => {
        dispatchSearchData(setKindAction(parentKey, listItem));
    };

    return (
        <div onClick={onClickSelectItem} className="drawer-item">
            <CheckBoxButton parentKey={parentKey} listItem={listItem} />
            <li>{listItem}</li>
        </div>
    );
};

export default DrawerItem;
