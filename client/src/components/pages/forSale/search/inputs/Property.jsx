import React, { useContext } from "react";
import { setPorpertyAction } from "../../../../../actions/searchActions";
import { SearchContext } from "../../../../../context/SearchContext";
import CheckBoxButton from "../CheckBoxButton";

const Property = ({ property }) => {
    const { dispatchSearchData } = useContext(SearchContext);

    const onClickSelectProperty = () => {
        dispatchSearchData(setPorpertyAction(property));
    };

    return (
        <div onClick={onClickSelectProperty} className="property">
            <CheckBoxButton listItem={property} />
            <p>{property}</p>
        </div>
    );
};

export default Property;
