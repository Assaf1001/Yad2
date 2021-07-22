import React, { useContext } from "react";
import { setStreetAction } from "../../../../../../actions/newAddActions";
import { NewAddContext } from "../../../../../../context/NewAddContext";

const StreetInputResultItem = ({ resultItem, setValue, setIsOpen }) => {
    const { dispatchNewAddData } = useContext(NewAddContext);

    const onClickSelectStreet = () => {
        dispatchNewAddData(setStreetAction(resultItem));
        setValue(resultItem);
        setIsOpen(false);
    };

    return (
        <>
            <p onClick={onClickSelectStreet}>{resultItem}</p>
        </>
    );
};

export default StreetInputResultItem;
