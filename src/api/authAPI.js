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
    return instans.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
  getLoginMe({email, password, rememberMe, captcha,}) {
    return instans.post(`auth/login`, {email, password, rememberMe, captcha,}).then((response) => {
      return response.data;
    });
  },
  getLogoutMe() {
    return instans.delete(`auth/login`).then((response) => {
      return response.data;
    });
  },
};
