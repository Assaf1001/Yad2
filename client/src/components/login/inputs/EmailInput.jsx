import validator from "validator";
import React, { useContext, useState } from "react";
import { ConnectionContext } from "../../../context/ConnectionContext";
import { setEmailAction } from "../../../actions/connectionActions";

import icons from "../../../icons/icons";

const EmailInput = () => {
    const {
        isLoginMode,
        loginData,
        dispatchLoginData,
        signupData,
        dispatchSignupData,
    } = useContext(ConnectionContext);
    const [isEmailBorderActive, setIsEmailBorderActive] = useState(false);

    const onInputEmail = (event) => {
        setIsEmailBorderActive(true);
        const value = event.target.value;
        if (validator.isEmail(value)) {
            isLoginMode
                ? dispatchLoginData(setEmailAction(value, true, ""))
                : dispatchSignupData(setEmailAction(value, true, ""));
        } else if (value.length === 0) {
            isLoginMode
                ? dispatchLoginData(setEmailAction("", false, "שדה חובה"))
                : dispatchSignupData(setEmailAction("", false, "שדה חובה"));
        } else {
            isLoginMode
                ? dispatchLoginData(
                      setEmailAction("", false, "מבנה האימייל שהוזן לא תקין")
                  )
                : dispatchSignupData(
                      setEmailAction("", false, "אימייל לא תקין")
                  );
        }
    };

    return (
        <>
            <label htmlFor="email">
                {!isLoginMode && signupData.isEmailValid && icons.check} כתובת
                מייל
            </label>
            <input
                onInput={onInputEmail}
                className={
                    !isEmailBorderActive
                        ? ""
                        : loginData.isEmailValid || signupData.isEmailValid
                        ? "valid-border"
                        : "error-border"
                }
                type="text"
                id="email"
                placeholder="your@mail.com"
            />
            {(!loginData.isEmailValid || !signupData.isEmailValid) && (
                <p className="error-message">
                    {isLoginMode
                        ? loginData.emailErrorMessage
                        : signupData.emailErrorMessage}
                </p>
            )}
        </>
    );
};

export default EmailInput;
