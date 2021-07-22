import React, { useContext } from "react";
import { setConditionAction } from "../../../../../../actions/newAddActions";
import { NewAddContext } from "../../../../../../context/NewAddContext";
import step2Data from "../../data/step2Data";

const ConditionInput = () => {
    const { dispatchNewAddData } = useContext(NewAddContext);

    const onChangeSelectCondition = (event) => {
        dispatchNewAddData(setConditionAction(event.target.value));
    };

    return (
        <div>
            <label htmlFor="condition">מצב הנכס*</label>
            <select onChange={onChangeSelectCondition} id="condition">
                <option hidden="hidden">משופץ? חדש מקבל״ן?</option>
                {step2Data.condition.map((option, i) => (
                    <option key={i}>{option}</option>
                ))}
            </select>
        </div>
    );
};

export default ConditionInput;
