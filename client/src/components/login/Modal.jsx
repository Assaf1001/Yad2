import React, { useState } from "react";
import lamp from "../../images/couch_lamp.svg";
import logo from "../../images/New_logo_negative.svg";
import LoginForm from "./LoginForm";
import SignupFormPart1 from "./SignupFormPart1";
import SignupFormPart2 from "./SignupFormPart2";

const Modal = () => {
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [isSignupPart1, setIsSignupPart1] = useState(true);

    return (
        <div className="login-modal">
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
                <LoginForm setIsLoginMode={setIsLoginMode} />
            ) : isSignupPart1 ? (
                <SignupFormPart1
                    setIsLoginMode={setIsLoginMode}
                    setIsSignupPart1={setIsSignupPart1}
                />
            ) : (
                <SignupFormPart2 />
            )}
        </div>
    );
};

export default Modal;
