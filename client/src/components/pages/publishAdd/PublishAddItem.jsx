import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const PublishAddItem = ({ item }) => {
    const history = useHistory();
    const [isHover, setIsHover] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="publish-add-item"
            onClick={() => {
                if (item.link) history.push(item.link);
            }}
        >
            {item.img && <div className="img">{item.img}</div>}
            <h2>{item.title}</h2>
            {item.descritption && isHover ? (
                <button>מתחילים</button>
            ) : (
                <p>{item.descritption}</p>
            )}
        </div>
    );
};

export default PublishAddItem;
