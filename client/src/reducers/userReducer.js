export const initialUserState = { user: null, token: null };

const userReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { user: action.user, token: action.token };
        case "LOGOUT":
            return { ...initialUserState };
        default:
            return state;
    }
};

export default userReducer;
