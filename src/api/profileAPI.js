import { instans } from "./authAPI";

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
