import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../../../context/SearchContext";
import icons from "../../../../icons/icons";

const CheckBoxButton = ({ listKey, parentKey, listItem }) => {
    const { searchData } = useContext(SearchContext);

    return (
        <div
            className={
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
