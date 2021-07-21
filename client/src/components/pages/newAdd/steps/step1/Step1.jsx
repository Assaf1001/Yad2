import React from "react";
import Step from "../Step";
import step1Data from "../data/step1Data";
import Step1Item from "./Step1Item";

const Step1 = () => {
    return (
        <Step number={1} title={"באיזו קטגוריה נפרסם היום?"}>
            {step1Data.map((item, i) => (
                <Step1Item key={i} item={item} />
            ))}
        </Step>
    );
};

export default Step1;
