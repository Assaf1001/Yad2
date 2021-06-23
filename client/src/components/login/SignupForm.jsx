import React, { useContext, useState } from "react";
import validator from "validator";
import { loginAction } from "../../actions/loginAction";
import { LoginContext } from "../../context/LoginContext";
import { saveUserOnCookie } from "../../cookies/cookies";
import { login } from "../../server/users";

import icons from "../../icons/icons";

const SignupForm = ({ setIsLoginMode }) => {
    const { dispatchUserData } = useContext(LoginContext);

    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [isEmailBorderActive, setIsEmailBorderActive] = useState(false);

    const [password, setPassword] = useState("");
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isPasswordBorderActive, setIsPasswordBorderActive] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [isPasswordRepeatValid, setIsPasswordRepeatValid] = useState(false);
    const [isPasswordRepeatBorderActive, setIsPasswordRepeatBorderActive] =
        useState(false);
    const [passwordRepeatErrorMessage, setPasswordRepeatErrorMessage] =
        useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const isFormValid = () => isEmailValid && isPasswordValid;

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
        } else if (value.length === 0) {
            setPassword("");
            setIsPasswordValid(false);
            setPasswordErrorMessage("שדה חובה");
        } else {
            switch (true) {
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
            }
        }
    };

    const onInputPasswordRepeat = (event) => {
        setIsPasswordRepeatBorderActive(true);
        const value = event.target.value;
        if (value === password) {
            setPasswordRepeat(value);
            setIsPasswordRepeatValid(true);
            setPasswordRepeatErrorMessage("");
        } else if (value.length === 0) {
            setPasswordRepeat("");
            setIsPasswordRepeatValid(false);
            setPasswordRepeatErrorMessage("שדה חובה");
        } else {
            setPasswordRepeat("");
            setIsPasswordRepeatValid(false);
            setPasswordRepeatErrorMessage("סיסמה לא תואמת");
        }
    };

    const onSubmitForm = (event) => {
        event.preventDefault();

        // if (isFormValid()) {
        //     login({ email, password })
        //         .then((data) => {
        //             saveUserOnCookie(data);
        //             dispatchUserData(loginAction(data));
        //         })
        //         .catch((err) => {
        //             setErrorMessage("מייל אינו תקין");
        //         });
        // }
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
                    <input
                        className={
                            !isPasswordBorderActive
                                ? ""
                                : isPasswordValid
                                ? "valid-border"
                                : "error-border"
                        }
                        onInput={onInputPassword}
                        type="password"
                        id="password"
                        placeholder="6 תווים, אותיות באנגלית וספרה"
                    />
                    {!isPasswordValid && (
                        <p className="error-message">{passwordErrorMessage}</p>
                    )}
                    <label className="password-repeat-label">
                        {isPasswordRepeatValid && icons.check}
                    </label>
                    <input
                        className={
                            !isPasswordRepeatBorderActive
                                ? ""
                                : isPasswordRepeatValid
                                ? "valid-border"
                                : "error-border"
                        }
                        onInput={onInputPasswordRepeat}
                        type="password"
                        id="password-repeat"
                        placeholder="חזור על הסיסמה שהקלדת"
                    />
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
                לא רשום?{" "}
                <span onClick={() => setIsLoginMode(true)}>להרשמה</span>
            </p>
        </div>
    );
};

export default SignupForm;
