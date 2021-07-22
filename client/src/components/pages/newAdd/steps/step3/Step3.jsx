import React from "react";
import Step from "../Step";
import RoomsInput from "./inputs/RoomsInput";

const Step3 = () => {
    return (
        <Step number={3} title="על הנכס">
            <form>
                <RoomsInput />
            </form>
        </Step>
    );
};

export default Step3;
