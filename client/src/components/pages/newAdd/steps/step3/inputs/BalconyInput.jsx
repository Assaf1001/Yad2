import React, { useContext } from "react";
import { setBalconyAction } from "../../../../../../actions/newAddActions";
import { NewAddContext } from "../../../../../../context/NewAddContext";
import RadioSwitch from "./RadioSwitch";

const BalconyInput = () => {
    const { dispatchNewAddData } = useContext(NewAddContext);

    const onClickSelectBalcony = (event) => {
        dispatchNewAddData(setBalconyAction(event.target.innerHTML));
    };

    return (
        <RadioSwitch label="מרפסת" onClickSelectFunc={onClickSelectBalcony} />
    );
};

export default BalconyInput;
