import React from "react";
import Step from "../Step";
import BalconyInput from "./inputs/BalconyInput";
import DescriptionInput from "./inputs/DescriptionInput";
import ParkingInput from "./inputs/ParkingInput";
import PropertiesInput from "./inputs/PropretiesInput";
import RoomsInput from "./inputs/RoomsInput";

const Step3 = () => {
    return (
        <Step number={3} title="על הנכס">
            <form>
                <RoomsInput />
                <ParkingInput />
                <BalconyInput />
                <PropertiesInput />
                <DescriptionInput />
            </form>
        </Step>
    );
};

export default Step3;
