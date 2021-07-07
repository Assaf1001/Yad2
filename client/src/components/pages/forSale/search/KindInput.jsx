import React from "react";
import Dropdown from "./Dropdown";
import kindInputData from "./kindInputData";

const KindInput = () => {
    return (
        <div className="input">
            <label htmlFor="kind">סוג נכס</label>
            <Dropdown title={kindInputData.title} data={kindInputData.data} />
        </div>
    );
};

export default KindInput;
