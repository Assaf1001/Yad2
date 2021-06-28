import React, { useState, useContext } from "react";
import { setPasswordRepeatAction } from "../../../actions/connectionActions";
import { ConnectionContext } from "../../../context/ConnectionContext";

import icons from "../../../icons/icons";

const PasswordRepeatInput = () => {
    const { signupData, dispatchSignupData } = useContext(ConnectionContext);
    const [isPasswordRepeatBorderActive, setIsPasswordRepeatBorderActive] =
        useState(false);
    const [passwordRepeatInputType, setPasswordRepeatInputType] =
        useState("password");

    const onInputPasswordRepeat = (event) => {
        setIsPasswordRepeatBorderActive(true);
        const value = event.target.value;
        if (value.length === 0) {
            dispatchSignupData(setPasswordRepeatAction(false, "שדה חובה"));
        } else if (value === signupData.password) {
            dispatchSignupData(setPasswordRepeatAction(true, ""));
        } else {
            dispatchSignupData(
                setPasswordRepeatAction(false, "סיסמה לא תואמת")
            );
        }
    };

    const onClickTogglePasswordRepeatType = () => {
        if (passwordRepeatInputType === "password") {
            setPasswordRepeatInputType("text");
        } else {
            setPasswordRepeatInputType("password");
        }
    };

    return (
        <>
            <label className="password-repeat-label">
                {signupData.isPasswordRepeatValid && icons.check}
            </label>
            <div
                id="input-container"
                className={
                    !isPasswordRepeatBorderActive
                        ? ""
                        : signupData.isPasswordRepeatValid
                        ? "valid-border"
                        : "error-border"
                }
            >
                <input
                    onInput={onInputPasswordRepeat}
                    type={passwordRepeatInputType}
                    id="password"
                    placeholder="חזור על הסיסמה שהקלדת"
                />
                <span onClick={onClickTogglePasswordRepeatType}>
                    {passwordRepeatInputType === "password"
                        ? icons.notVisable
                        : icons.visable}
                </span>
            </div>
            {!signupData.isPasswordRepeatValid && (
                <p className="error-message">
                    {signupData.passwordRepeatErrorMessage}
                </p>
            )}
        </>
    );
};

export default PasswordRepeatInput;
