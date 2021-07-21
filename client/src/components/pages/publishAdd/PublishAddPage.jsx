import React from "react";
import publishAddData from "./publishAddData";
import PublishAddItem from "./PublishAddItem";

const PublishAddPage = () => {
    return (
        <div className="publish-add">
            <h1>אני רוצה לפרסם מודעה בלוח...</h1>
            <div className="categories">
                <div className="row1">
                    {publishAddData[0].map((item, i) => (
                        <PublishAddItem key={i} item={item} />
                    ))}
                </div>
                <div className="row2">
                    {publishAddData[1].map((item, i) => (
                        <PublishAddItem key={i} item={item} />
                    ))}
                </div>
                <div className="row3">
                    {publishAddData[2].map((item, i) => (
                        <PublishAddItem key={i} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PublishAddPage;
