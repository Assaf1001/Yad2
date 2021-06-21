import axios from "axios";

const serverAddress = process.env.REACT_APP_SERVER_ADDRESS;

export const login = async ({ email, password }) => {
    try {
        const res = await axios.post(`${serverAddress}/users/login`, {
            email,
            password,
        });

        return { user: res.data.user, token: res.data.token };
    } catch (err) {
        throw new Error(err.response.data.message);
    }
};
