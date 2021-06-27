import React, { useContext, useState } from "react";
import validator from "validator";
import { loginAction } from "../../actions/loginAction";
import { LoginContext } from "../../context/LoginContext";
import { saveUserOnCookie } from "../../cookies/cookies";
import { signup } from "../../server/users";

import icons from "../../icons/icons";

const SignupForm = ({ setIsLoginMode, setErrorMessage }) => {
    const { dispatchUserData } = useContext(LoginContext);

    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [isEmailBorderActive, setIsEmailBorderActive] = useState(false);

    const [password, setPassword] = useState("");
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isPasswordBorderActive, setIsPasswordBorderActive] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

    const [isPasswordRepeatValid, setIsPasswordRepeatValid] = useState(false);
    const [isPasswordRepeatBorderActive, setIsPasswordRepeatBorderActive] =
        useState(false);
    const [passwordRepeatErrorMessage, setPasswordRepeatErrorMessage] =
        useState("");

    const [passwordInputType, setPasswordInputType] = useState("password");
    const [passwordRepeatInputType, setPasswordRepeatInputType] =
        useState("password");

    const isFormValid = () =>
        isEmailValid && isPasswordValid && isPasswordRepeatValid;

    const onInputEmail = (event) => {
        setIsEmailBorderActive(true);
        const value = event.target.value;
        if (validator.isEmail(value)) {
            setEmail(value);
            setIsEmailValid(true);
            setEmailErrorMessage("");
        } else if (value.length === 0) {
            setEmail("");
            setIsEmailValid(false);
            setEmailErrorMessage("שדה חובה");
        } else {
            setEmail("");
            setIsEmailValid(false);
            setEmailErrorMessage("אימייל לא תקין");
        }
    };

    const onInputPassword = (event) => {
        setIsPasswordBorderActive(true);
        const value = event.target.value;
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,20}$/;

        if (regex.test(value)) {
            setPassword(value);
            setIsPasswordValid(true);
            setPasswordErrorMessage("");
        } else {
            switch (true) {
                case value.length === 0:
                    setPassword("");
                    setIsPasswordValid(false);
                    setPasswordErrorMessage("שדה חובה");
                    break;
                case value.length < 6:
                    setPasswordErrorMessage("מינימום 6 תווים");
                    setIsPasswordValid(false);
                    break;
                case value.length >= 20:
                    setPasswordErrorMessage("מקסימום 20 תווים");
                    setIsPasswordValid(false);
                    break;
                case !/[A-Z]/.test(value):
                    setPasswordErrorMessage("לפחות אות גדולה אחת");
                    setIsPasswordValid(false);
                    break;
                case !/[a-z]/.test(value):
                    setPasswordErrorMessage("לפחות אות קטנה אחת");
                    setIsPasswordValid(false);
                    break;
                case !/\d/.test(value):
                    setPasswordErrorMessage("לפחות ספרה אחת");
                    setIsPasswordValid(false);
                    break;
                default:
                    return;
            }
        }
    };

    const onInputPasswordRepeat = (event) => {
        setIsPasswordRepeatBorderActive(true);
        const value = event.target.value;
        if (value.length === 0) {
            setIsPasswordRepeatValid(false);
            setPasswordRepeatErrorMessage("שדה חובה");
        } else if (value === password) {
            setIsPasswordRepeatValid(true);
            setPasswordRepeatErrorMessage("");
        } else {
            setIsPasswordRepeatValid(false);
            setPasswordRepeatErrorMessage("סיסמה לא תואמת");
        }
    };

    const onSubmitForm = (event) => {
        event.preventDefault();

        if (isFormValid()) {
            signup({ email, password })
                .then((data) => {
                    console.log(data);
                    saveUserOnCookie(data);
                    dispatchUserData(loginAction(data));
                })
                .catch((err) => {
                    setErrorMessage(err.message);
                });
        }
    };

    const onClickTogglePasswordType = () => {
        if (passwordInputType === "password") {
            setPasswordInputType("text");
        } else {
            setPasswordInputType("password");
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
        <div className="form">
            <div className="form-header">
                <h3>הרשמה</h3>
                <p>הזן את הפרטים כדי להרשם</p>
            </div>
            <form onSubmit={onSubmitForm}>
                <div className="inputs">
                    <label htmlFor="email">
                        {isEmailValid && icons.check} כתובת מייל
                    </label>
                    <input
                        className={
                            !isEmailBorderActive
                                ? ""
                                : isEmailValid
                                ? "valid-border"
                                : "error-border"
                        }
                        onInput={onInputEmail}
                        type="text"
                        id="email"
                        placeholder="your@mail.com"
                    />
                    {!isEmailValid && (
                        <p className="error-message">{emailErrorMessage}</p>
                    )}
                    <label id="password-label" htmlFor="password">
                        {isPasswordValid && icons.check} סיסמה
                    </label>
                    <div
                        id="input-container"
                        className={
                            !isPasswordBorderActive
                                ? ""
                                : isPasswordValid
                                ? "valid-border"
                                : "error-border"
                        }
                    >
                        <input
                            onInput={onInputPassword}
                            type={passwordInputType}
                            id="password"
                            placeholder="6 תווים, אותיות באנגלית וספרה"
                        />
                        <span onClick={onClickTogglePasswordType}>
                            {passwordInputType === "password"
                                ? icons.notVisable
                                : icons.visable}
                        </span>
                    </div>
                    {!isPasswordValid && (
                        <p className="error-message">{passwordErrorMessage}</p>
                    )}
                    <div
                        id="input-container-2"
                        className={
                            !isPasswordRepeatBorderActive
                                ? ""
                                : isPasswordValid
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
                    <label className="password-repeat-label">
                        {isPasswordRepeatValid && icons.check}
                    </label>

                    {!isPasswordRepeatValid && (
                        <p className="error-message">
                            {passwordRepeatErrorMessage}
                        </p>
                    )}
                </div>
                <button
                    disabled={
                        !isFormValid() ||
                        email.length === 0 ||
                        password.length === 0
                    }
                    type="submit"
                >
                    המשך
                </button>
            </form>
            <p>
                כבר רשום?{" "}
                <span onClick={() => setIsLoginMode(true)}>להתחברות</span>
            </p>
        </div>
    );
};

export default SignupForm;
