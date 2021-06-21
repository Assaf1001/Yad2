export const initalizeLoginState = { user: null, token: null };

const loginReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { user: action.user, token: action.token };
        case "LOGOUT":
            return { ...initalizeLoginState };
        default:
            return state;
    }
};

export default loginReducer;
