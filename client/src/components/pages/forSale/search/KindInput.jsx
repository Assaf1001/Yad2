import React from "react";
import Dropdown from "./Dropdown";
import kindInputData from "./kindInputData";

const KindInput = () => {
    return (
        <div>
            <label htmlFor="kind">סוג נכס</label>
            <Dropdown title={"בחרו סוגי נכסים"} data={kindInputData} />
        </div>
    );
};

export default KindInput;
