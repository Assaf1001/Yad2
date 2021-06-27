import React, { useContext, useState } from "react";
import validator from "validator";
import { loginAction } from "../../actions/loginAction";
import { LoginContext } from "../../context/LoginContext";
import { saveUserOnCookie } from "../../cookies/cookies";
import icons from "../../icons/icons";
import { login } from "../../server/users";

const LoginForm = ({ setIsLoginMode, setErrorMessage }) => {
    const { dispatchUserData } = useContext(LoginContext);

    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isEmailBorderActive, setIsEmailBorderActive] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isPasswordBorderActive, setIsPasswordBorderActive] = useState(false);

    const [passwordInputType, setPasswordInputType] = useState("password");

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
            setEmailErrorMessage("מבנה האמייל שהוזן לא תקין");
        }
    };

    const onInputPassword = (event) => {
        setIsPasswordBorderActive(true);
        const value = event.target.value;
        if (value.length > 0) {
            setPassword(value);
            setIsPasswordValid(true);
        } else {
            setPassword("");
            setIsPasswordValid(false);
        }
    };

    const onSubmitForm = (event) => {
        event.preventDefault();

        if (isFormValid()) {
            login({ email, password })
                .then((data) => {
                    console.log(data);
                    saveUserOnCookie(data);
                    dispatchUserData(loginAction(data));
                })
                .catch((err) => {
                    console.log(err.message);
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

    return (
        <div className="form">
            <div className="form-header">
                <h3>התחברות</h3>
                <p>הזן את הפרטים כדי להתחבר</p>
            </div>
            <form onSubmit={onSubmitForm}>
                <div className="inputs">
                    <label htmlFor="email">כתובת מייל</label>
                    <input
                        onInput={onInputEmail}
                        className={
                            !isEmailBorderActive
                                ? ""
                                : isEmailValid
                                ? "valid-border"
                                : "error-border"
                        }
                        type="text"
                        id="email"
                        placeholder="your@mail.com"
                    />
                    {!isEmailValid && (
                        <p className="error-message">{emailErrorMessage}</p>
                    )}
                    <label id="password-label" htmlFor="password">
                        סיסמה
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
                            placeholder="הקלד סיסמה"
                        />
                        <span onClick={onClickTogglePasswordType}>
                            {passwordInputType === "password"
                                ? icons.notVisable
                                : icons.visable}
                        </span>
                    </div>
                    {!isPasswordValid && (
                        <p className="error-message">שדה חובה</p>
                    )}
                    <a>שכחתי סיסמה</a>
                </div>
                <button
                    disabled={
                        !isFormValid() ||
                        email.length === 0 ||
                        password.length === 0
                    }
                    type="submit"
                >
                    התחבר
                </button>
            </form>
            <p>
                לא רשום?{" "}
                <span onClick={() => setIsLoginMode(false)}>להרשמה</span>
            </p>
        </div>
    );
};

export default LoginForm;
