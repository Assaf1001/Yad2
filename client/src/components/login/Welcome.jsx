import React, { useContext } from "react";
import { ConnectionContext } from "../../context/ConnectionContext";

import lamp from "../../images/couch_lamp.svg";
import logo from "../../images/New_logo_negative.svg";

const Welcome = () => {
    const { isLoginMode } = useContext(ConnectionContext);

    return (
        <div className="welcome">
            <div className="welcome-content">
                <img id="logo" src={logo} alt="logo" />
                <h1>ברוכים הבאים לאתר יד2</h1>
                {isLoginMode ? (
                    <h4>טוב לראות אותך שוב!</h4>
                ) : (
                    <h4>הצטרפו לקהילה שלנו!</h4>
                )}
                <img id="lamp" src={lamp} alt="lamp" />
            </div>
        </div>
    );
};

export default Welcome;
