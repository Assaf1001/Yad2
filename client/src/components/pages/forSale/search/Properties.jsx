import React from "react";
import propertiesArray from "./propertiesArray";
import Property from "./Property";

const Properties = () => {
    return (
        <div className="properties">
            <h4>מאפייני דירה</h4>
            <div className="properties-content">
                {propertiesArray.map((property, i) => (
                    <Property key={i} property={property} />
                ))}
            </div>
        </div>
    );
};

export default Properties;
