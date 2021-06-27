import React, { useEffect } from "react";

const Notification = ({ errorMessage, setErrorMessage }) => {
    useEffect(() => {
        setTimeout(() => {
            setErrorMessage("");
        }, 4000);
    }, [setErrorMessage]);

    const onClickCloseNotification = () => {
        setErrorMessage("");
    };

    return (
        <div className="notification">
            <div>
                <div className="circle">x</div>
                <p>{errorMessage}</p>
            </div>
            <button onClick={onClickCloseNotification}>X</button>
        </div>
    );
};

export default Notification;
