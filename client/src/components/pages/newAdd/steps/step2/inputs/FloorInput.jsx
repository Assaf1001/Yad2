import React, { useContext } from "react";
import {
    setFloorAction,
    setTotalFloorsAction,
} from "../../../../../../actions/newAddActions";
import { NewAddContext } from "../../../../../../context/NewAddContext";

const FloorInput = () => {
    const { newAddData, dispatchNewAddData } = useContext(NewAddContext);

    const onInputSetFloor = (event) => {
        dispatchNewAddData(setFloorAction(event.target.value));
    };

    const onInputSetTotalFloors = (event) => {
        dispatchNewAddData(setTotalFloorsAction(event.target.value));
    };

    return (
        <div>
            <label htmlFor="floor">קומה*</label>
            <input
                onInput={onInputSetFloor}
                type="number"
                placeholder="הכנסת מספר קומה"
                min="0"
                disabled={!newAddData.houseNumber}
            />
            <label htmlFor="total-floors">סה״כ קומות בבניין*</label>
            <input
                onInput={onInputSetTotalFloors}
                type="number"
                placeholder="הכנסת סה״כ קומות"
                min="0"
                disabled={!newAddData.floor}
            />
        </div>
    );
};

export default FloorInput;
