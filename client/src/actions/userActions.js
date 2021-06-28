export const userLoginAction = ({ user = {}, token = {} }) => ({
    type: "LOGIN",
    user,
    token,
});

export const userLogoutAction = () => ({
    type: "LOGOUT",
});
