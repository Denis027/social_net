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

    loginMe(email, password, rememberMe = false) {
        return instans.post(`auth/login/`, {
            email,
            password,
            rememberMe,
        });
    },

    logoutMe() {
        return instans.delete(`auth/login/`);
    },
};

export const profileAPI = {
    getUserProfilePage(userId) {
        return instans.get(`profile/` + userId).then((response) => {
            return response.data;
        });
    },
    getProfileStatus(userId) {
        return instans.get(`/profile/status/${userId}`).then((response) => {
            return response.data;
        });
    },
    setProfileStatus(profileStatus) {
        return instans
            .put(`profile/status`, { status: profileStatus })
            .then((response) => {
                return response;
            });
    },
};

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instans
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                return response.data;
            });
    },
    userFollow(userId) {
        return instans.post(`follow/${userId}`).then((response) => {
            return response.data;
        });
    },
    userUnfollow(userId = 30973) {
        return instans.delete(`follow/${userId}`).then((response) => {
            return response.data;
        });
    },
};
