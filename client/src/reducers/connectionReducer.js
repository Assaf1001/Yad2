export const initialLoginState = {
    email: "",
    isEmailValid: false,
    emailErrorMessage: "",
    password: "",
    isPasswordValid: false,
    passwordErrorMessage: "",
};

export const initialSignupState = {
    email: "",
    isEmailValid: false,
    emailErrorMessage: "",
    password: "",
    isPasswordValid: false,
    passwordErrorMessage: "",
    isPasswordRepeatValid: false,
    passwordRepeatErrorMessage: "",
};

const connectionReducer = (state, action) => {
    switch (action.type) {
        case "SET_EMAIL":
            return {
                ...state,
                email: action.email,
                isEmailValid: action.isEmailValid,
                emailErrorMessage: action.emailErrorMessage,
            };
        case "SET_PASSWORD":
            return {
                ...state,
                password: action.password,
                isPasswordValid: action.isPasswordValid,
                passwordErrorMessage: action.passwordErrorMessage,
            };
        case "SET_PASSWORD_REPEAT":
            return {
                ...state,
                isPasswordRepeatValid: action.isPasswordRepeatValid,
                passwordRepeatErrorMessage: action.passwordRepeatErrorMessage,
            };
        case "INIT_LOGIN":
            return initialLoginState;
        case "INIT_SIGNUP":
            return initialSignupState;
        default:
            return state;
    }
};

export default connectionReducer;
