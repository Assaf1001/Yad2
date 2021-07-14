import React, { useContext } from "react";
import { SearchContext } from "../../../../context/SearchContext";
import icons from "../../../../icons/icons";

const CheckBoxButton = ({ listKey, parentKey, listItem, isSelected }) => {
    const { searchData } = useContext(SearchContext);

    return (
        <div
            className={
                isSelected ||
                searchData.properties.includes(listItem) ||
                (listKey === "all" &&
                    (searchData.kind.apartments.length > 0 ||
                        searchData.kind.houses.length > 0 ||
                        searchData.kind.other.length > 0)) ||
                (searchData.kind[listKey] &&
                    searchData.kind[listKey].length > 0) ||
                (searchData.kind[parentKey] &&
                    searchData.kind[parentKey].includes(listItem))
                    ? "check-box-button check-box-button__marked"
                    : "check-box-button"
            }
        >
            {icons.check}
        </div>
    );
};

export default CheckBoxButton;
