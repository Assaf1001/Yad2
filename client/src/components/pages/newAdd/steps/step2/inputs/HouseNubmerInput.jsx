import React, { useContext } from "react";
import { setHouseNumberAction } from "../../../../../../actions/newAddActions";
import { NewAddContext } from "../../../../../../context/NewAddContext";

const HouseNumberInput = () => {
    const { newAddData, dispatchNewAddData } = useContext(NewAddContext);

    const onInputSetHouseNumber = (event) => {
        dispatchNewAddData(setHouseNumberAction(event.target.value));
    };

    return (
        <div>
            <label htmlFor="house-number">מס׳ בית</label>
            <input
                onInput={onInputSetHouseNumber}
                type="number"
                min="0"
                disabled={!newAddData.street}
            />
            {console.log(newAddData)}
        </div>
    );
};

export default HouseNumberInput;
