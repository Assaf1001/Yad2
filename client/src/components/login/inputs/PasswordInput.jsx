import React, { useContext, useEffect, useState } from "react";
import { ConnectionContext } from "../../../context/ConnectionContext";
import {
    changePasswordAction,
    setPasswordAction,
} from "../../../actions/connectionActions";

import icons from "../../../icons/icons";

const PasswordInput = () => {
    const {
        isLoginMode,
        loginData,
        dispatchLoginData,
        signupData,
        dispatchSignupData,
    } = useContext(ConnectionContext);
    const [isPasswordBorderActive, setIsPasswordBorderActive] = useState(false);
    const [passwordInputType, setPasswordInputType] = useState("password");

    useEffect(() => {
        return () => setIsPasswordBorderActive(false);
    }, [isLoginMode]);

    const onInputPasswordLogin = (event) => {
        setIsPasswordBorderActive(true);
        const value = event.target.value;
        if (value.length > 0) {
            dispatchLoginData(setPasswordAction(value, true, ""));
        } else {
            dispatchLoginData(setPasswordAction("", false, "שדה חובה"));
        }
    };

    const onInputPasswordSignup = (event) => {
        setIsPasswordBorderActive(true);
        const value = event.target.value;
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,20}$/;

        if (regex.test(value)) {
            dispatchSignupData(setPasswordAction(value, true, ""));
        } else {
            switch (true) {
                case !/[a-zA-z]/.test(value):
                    return dispatchSignupData(
                        setPasswordAction("", false, "תווים לא תקינים הוזנו")
                    );
                case value.length === 0:
                    return dispatchSignupData(
                        setPasswordAction("", false, "שדה חובה")
                    );
                case value.length < 6:
                    return dispatchSignupData(
                        setPasswordAction("", false, "מינימום 6 תווים")
                    );
                case value.length >= 20:
                    return dispatchSignupData(
                        setPasswordAction("", false, "מקסימום 20 תווים")
                    );
                case !/[A-Z]/.test(value):
                    return dispatchSignupData(
                        setPasswordAction("", false, "לפחות אות גדולה אחת")
                    );
                case !/[a-z]/.test(value):
                    return dispatchSignupData(
                        setPasswordAction("", false, "לפחות אות קטנה אחת")
                    );
                case !/\d/.test(value):
                    return dispatchSignupData(
                        setPasswordAction("", false, "לפחות ספרה אחת")
                    );
                default:
                    return;
            }
        }
    };

    const onClickTogglePasswordType = () => {
        if (passwordInputType === "password") {
            setPasswordInputType("text");
        } else {
            setPasswordInputType("password");
        }
    };

    return (
        <>
            <label id="password-label" htmlFor="password">
                {!isLoginMode && signupData.isPasswordValid && icons.check}{" "}
                סיסמה
            </label>
            <div
                id="input-container"
                className={
                    !isPasswordBorderActive
                        ? ""
                        : loginData.isPasswordValid ||
                          signupData.isPasswordValid
                        ? "valid-border"
                        : "error-border"
                }
            >
                <input
                    onInput={
                        isLoginMode
                            ? onInputPasswordLogin
                            : onInputPasswordSignup
                    }
                    onChange={(event) =>
                        isLoginMode
                            ? dispatchLoginData(
                                  changePasswordAction(event.target.value)
                              )
                            : dispatchSignupData(
                                  changePasswordAction(event.target.value)
                              )
                    }
                    value={
                        isLoginMode ? loginData.password : signupData.password
                    }
                    type={passwordInputType}
                    id="password"
                    placeholder={
                        isLoginMode
                            ? "הקלד סיסמה"
                            : "6 תווים, אותיות באנגלית וספרה"
                    }
                />
                <span onClick={onClickTogglePasswordType}>
                    {passwordInputType === "password"
                        ? icons.notVisable
                        : icons.visable}
                </span>
            </div>
            {(!loginData.isPasswordValid || !signupData.isPasswordValid) && (
                <p className="error-message">
                    {isLoginMode
                        ? loginData.passwordErrorMessage
                        : signupData.passwordErrorMessage}
                </p>
            )}
            {isLoginMode && <p className="forgot-password">שכחתי סיסמה</p>}
        </>
    );
};

export default PasswordInput;
