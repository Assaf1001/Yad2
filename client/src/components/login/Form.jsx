import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { ConnectionContext } from "../../context/ConnectionContext";
import { userLoginAction } from "../../actions/userActions";
import { saveUserOnCookie } from "../../cookies/cookies";
import { login, signup } from "../../server/users";

import EmailInput from "./inputs/EmailInput";
import PasswordInput from "./inputs/PasswordInput";
import PasswordRepeatInput from "./inputs/PasswordRepeatInput";

const LoginForm = () => {
    const { dispatchUserData } = useContext(UserContext);
    const {
        isLoginMode,
        loginData,
        signupData,
        onClickToggleLoginMode,
        setErrorMessage,
    } = useContext(ConnectionContext);

    const isFormValid = () =>
        isLoginMode
            ? loginData.isEmailValid && loginData.isPasswordValid
            : signupData.isEmailValid &&
              signupData.isPasswordValid &&
              signupData.isPasswordRepeatValid;

    const onSubmitForm = (event, data, cb) => {
        event.preventDefault();

        if (isFormValid()) {
            cb({ email: data.email, password: data.password })
                .then((res) => {
                    saveUserOnCookie(res);
                    dispatchUserData(userLoginAction(res));
                })
                .catch((err) => {
                    console.log(err.message);
                    setErrorMessage(err.message);
                });
        }
    };

    return (
        <div className="form">
            <div className="form-header">
                <h3>{isLoginMode ? "התחברות" : "הרשמה"}</h3>
                <p>הזן את הפרטים כדי {isLoginMode ? "להתחבר" : "להרשם"}</p>
            </div>
            <form
                onSubmit={(event) =>
                    onSubmitForm(
                        event,
                        isLoginMode ? loginData : signupData,
                        isLoginMode ? login : signup
                    )
                }
            >
                <div className="inputs">
                    <EmailInput />
                    <PasswordInput />
                    {!isLoginMode && <PasswordRepeatInput />}
                </div>
                <button disabled={!isFormValid()} type="submit">
                    {isLoginMode ? "התחבר" : "המשך"}
                </button>
            </form>
            <p>
                {isLoginMode ? "כבר" : "לא"} רשום?{" "}
                <span onClick={onClickToggleLoginMode}>
                    {isLoginMode ? "להרשמה" : "להתחברות"}
                </span>
            </p>
        </div>
    );
};

export default LoginForm;
