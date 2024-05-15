import { instans } from "./authAPI";

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
