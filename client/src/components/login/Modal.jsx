import React, { useState } from "react";
import lamp from "../../images/couch_lamp.svg";
import logo from "../../images/New_logo_negative.svg";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Notification from "./Notification";
import icons from "../../icons/icons";

const Modal = ({ onClickToggleModal }) => {
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    return (
        <div>
            {errorMessage && (
                <Notification
                    errorMessage={errorMessage}
                    setErrorMessage={setErrorMessage}
                />
            )}
            <div className="login-modal">
                <div className="close-button" onClick={onClickToggleModal}>
                    {icons.close}
                </div>
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
                {isLoginMode ? (
                    <LoginForm
                        setIsLoginMode={setIsLoginMode}
                        setErrorMessage={setErrorMessage}
                    />
                ) : (
                    <SignupForm
                        setIsLoginMode={setIsLoginMode}
                        setErrorMessage={setErrorMessage}
                    />
                )}
            </div>
        </div>
    );
};

export default Modal;
