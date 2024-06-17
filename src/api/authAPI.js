import axios from "axios";

const instans = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "5aadb8d8-c85b-45a8-8a26-0a0f38402345",
    },
});

export const authAPI = {
    getAuthMe() {
        return instans.get(`auth/me/`).then((response) => {
            return response.data;
        });
    },

    loginMe(email, password) {
        return instans.post(`auth/login`, {
            email,
            password,
        });
    },

    logoutMe() {
        return instans.delete(`auth/login`);
    },
};
