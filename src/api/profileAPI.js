import axios from "axios";

const instans = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "5aadb8d8-c85b-45a8-8a26-0a0f38402345",
  },
});

export const profileAPI = {
  getUserProfilePage(userId) {
    return instans.get(`profile/` + userId).then((response) => {
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
