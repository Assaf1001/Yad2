import React from "react";
import Step from "../Step";
import KindInput from "./KindInput";
import ConditionInput from "./ConditionInput";
import CityInput from "../../../newAdd/steps/step2/CityInput";

const Step2 = () => {
    return (
        <Step number={2} title={"כתובת הנכס"}>
            <form>
                <KindInput />
                <ConditionInput />
                <CityInput />
            </form>
        </Step>
    );
};

export default Step2;
