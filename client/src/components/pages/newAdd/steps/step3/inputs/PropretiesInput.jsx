import React from "react";
import step3Data from "../../data/step3Data";
import PropertiesInputItem from "./PropertiesInputItem";

const PropertiesInput = () => (
    <div>
        <h3>מאפייני הנכס</h3>
        {step3Data.properties.map(({ text, icon }) => (
            <PropertiesInputItem key={text} text={text} icon={icon} />
        ))}
    </div>
);

export default PropertiesInput;
