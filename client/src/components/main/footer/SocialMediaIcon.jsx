import React from "react";

const SocialMediaIcon = ({ icon }) => {
    return (
        <div className="icon">
            <img src={icon} alt={icon} />
        </div>
    );
};

export default SocialMediaIcon;
