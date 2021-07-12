import React from "react";
import CheckBoxButton from "./CheckBoxButton";

const Property = ({ property }) => {
    return (
        <div className="property">
            <CheckBoxButton />
            <p>{property}</p>
        </div>
    );
};

export default Property;
