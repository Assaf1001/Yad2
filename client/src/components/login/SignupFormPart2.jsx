import React, { useContext, useState } from "react";
import validator from "validator";
import { loginAction } from "../../actions/loginAction";
import { LoginContext } from "../../context/LoginContext";
import { saveUserOnCookie } from "../../cookies/cookies";
import { login } from "../../server/users";

const SignupFormPart2 = ({ setIsLoginMode, setIsSignupPart1 }) => {
    const { dispatchUserData } = useContext(LoginContext);

    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const isFormValid = () => isEmailValid && isPasswordValid;

    const onInputEmail = (event) => {
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

        // setIsSignupPart1(false);
    };
    return (
        <div className="form">
            <div className="form-header">
                <h3>הרשמה</h3>
                <p>הזן את הפרטים כדי להרשם</p>
            </div>
            <form onSubmit={onSubmitForm}>
                <div className="inputs">
                    <label htmlFor="email">כתובת מייל</label>
                    <input
                        onInput={onInputEmail}
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
                    <input
                        onInput={onInputPassword}
                        type="password"
                        id="password"
                        placeholder="6 תווים, אותיות באנגלית וספרה"
                    />
                    <input
                        onInput={onInputPassword}
                        type="password"
                        id="password-repeat"
                        placeholder="חזור על הסיסמה שהקלדת"
                    />
                    {!isPasswordValid && (
                        <p className="error-message">שדה חובה</p>
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
                לא רשום? <span>להרשמה</span>
            </p>
        </div>
    );
};

export default SignupFormPart2;
