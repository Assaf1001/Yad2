import React from "react";

const RadioSwitch = ({ label, onClickSelectFunc }) => (
    <div>
        <label>{label}</label>
        {["ללא", 1, 2, 3].map((value) => (
            <div onClick={onClickSelectFunc} key={value}>
                <p>{value}</p>
            </div>
        ))}
    </div>
);

export default RadioSwitch;
