import React from "react";

const Category = ({ dataList }) => (
    <div>
        <p>{dataList.title}</p>
        <ul>
            <div className="right-row">
                {dataList.row1.map((listItem, i) => (
                    <li key={i}>{listItem}</li>
                ))}
            </div>
            {dataList.row2 && (
                <div>
                    {dataList.row2.map((listItem, i) => (
                        <li key={i}>{listItem}</li>
                    ))}
                </div>
            )}
        </ul>
    </div>
);

export default Category;
