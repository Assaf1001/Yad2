export const setEmailAction = (email, isEmailValid, emailErrorMessage) => ({
    type: "SET_EMAIL",
    email,
    isEmailValid,
    emailErrorMessage,
});

export const setPasswordAction = (
    password,
    isPasswordValid,
    passwordErrorMessage
) => ({
    type: "SET_PASSWORD",
    password,
    isPasswordValid,
    passwordErrorMessage,
});

export const setPasswordRepeatAction = (
    isPasswordRepeatValid,
    passwordRepeatErrorMessage
) => ({
    type: "SET_PASSWORD_REPEAT",
    isPasswordRepeatValid,
    passwordRepeatErrorMessage,
});

export const changeEmailAction = (email) => ({ type: "CHANGE_EMAIL", email });

export const changePasswordAction = (password) => ({
    type: "CHANGE_PASSWORD",
    password,
});

export const initLoginAction = () => ({ type: "INIT_LOGIN" });

export const initSignupAction = () => ({ type: "INIT_SIGNUP" });
