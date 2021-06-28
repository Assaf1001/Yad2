import React from "react";

const Category = ({ dataList }) => {
    return (
        <div>
            <h5>{dataList.title}</h5>
            <ul>
                {dataList.list.map((listItem, i) => (
                    <li key={i}>{listItem}</li>
                ))}
            </ul>
        </div>
    );
};

export default Category;
