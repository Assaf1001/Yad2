import React, { useContext } from "react";
import { setCityAction } from "../../../../../actions/newAddActions";
import { NewAddContext } from "../../../../../context/NewAddContext";

const CityInputResultItem = ({ resultItem }) => {
    const { dispatchNewAddData } = useContext(NewAddContext);

    const onClickSelectCity = () => {
        dispatchNewAddData(setCityAction(resultItem));
    };

    return (
        <>
            <p onClick={onClickSelectCity}>{resultItem}</p>
        </>
    );
};

export default CityInputResultItem;
