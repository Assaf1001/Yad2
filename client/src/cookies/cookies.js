import Cookies from "js-cookie";

const USER_DATA = "user-data";

export const saveUserOnCookie = (userData) => {
    const jsonUserData = JSON.stringify(userData);
    Cookies.set(USER_DATA, jsonUserData, {
        expires: 1,
        sameSite: "strict",
    });
};

export const deleteUserOnCookie = () => {
    Cookies.remove(USER_DATA, { sameSite: "strict" });
};

export const getUserFromCookie = () => {
    const userData = Cookies.get(USER_DATA);
    if (userData === undefined) return null;

    return JSON.parse(userData);
};
