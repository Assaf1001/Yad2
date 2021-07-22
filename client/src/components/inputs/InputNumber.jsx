import React from "react";

const InputNumber = ({ id, label, placeholder, dispatch, action }) => {
    const onInputDispatchData = (event) => {
        dispatch(action(event.target.value));
    };

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                onInput={onInputDispatchData}
                type="number"
                min="0"
                placeholder={placeholder}
            />
        </div>
    );
};

export default InputNumber;
