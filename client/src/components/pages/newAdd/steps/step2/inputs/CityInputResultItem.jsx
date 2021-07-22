import React, { useContext } from "react";
import { setCityAction } from "../../../../../../actions/newAddActions";
import { NewAddContext } from "../../../../../../context/NewAddContext";

const CityInputResultItem = ({ resultItem, setValue, setIsOpen }) => {
    const { dispatchNewAddData } = useContext(NewAddContext);

    const onClickSelectCity = () => {
        dispatchNewAddData(setCityAction(resultItem));
        setValue(resultItem);
        setIsOpen(false);
    };

    return (
        <>
            <p onClick={onClickSelectCity}>{resultItem}</p>
        </>
    );
};

export default CityInputResultItem;
