import React, { useContext } from "react";
import { setParkingAction } from "../../../../../../actions/newAddActions";
import { NewAddContext } from "../../../../../../context/NewAddContext";
import RadioSwitch from "./RadioSwitch";

const ParkingInput = () => {
    const { dispatchNewAddData } = useContext(NewAddContext);

    const onClickSelectParking = (event) => {
        dispatchNewAddData(setParkingAction(event.target.innerHTML));
    };

    return (
        <RadioSwitch label="חניה" onClickSelectFunc={onClickSelectParking} />
    );
};

export default ParkingInput;
