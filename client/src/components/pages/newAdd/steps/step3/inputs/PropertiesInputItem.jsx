import React, { useContext } from "react";
import { setPropertyAction } from "../../../../../../actions/newAddActions";
import { NewAddContext } from "../../../../../../context/NewAddContext";

const PropertiesInputItem = ({ icon, text }) => {
    const { dispatchNewAddData } = useContext(NewAddContext);

    const onClickSelectProperty = () => {
        dispatchNewAddData(setPropertyAction(text));
    };

    return (
        <div onClick={onClickSelectProperty}>
            <span>{icon}</span>
            <p>{text}</p>
        </div>
    );
};

export default PropertiesInputItem;
