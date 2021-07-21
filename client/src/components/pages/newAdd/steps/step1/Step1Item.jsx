import React from "react";

const Step1Item = ({ item }) => {
    return (
        <div className="step1-item">
            {item.img}
            <p>{item.title}</p>
        </div>
    );
};

export default Step1Item;
