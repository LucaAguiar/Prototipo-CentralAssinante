import axios from "axios";
import router from "../router/index";
//import myAxios from "@/mixins/myAxiosMixin";

/*
const refreshToken = function () {
    this.value.refresh_token = localStorage.getItem("refresh_token");
    myAxios
        .post(`/auth/refresh`, this.value)
        .then((response) => {
            localStorage.setItem("access_token", response.data.access_token);
            localStorage.setItem("refresh_token", response.data.refresh_token);

            console.log(localStorage.getItem("access_token"));
            console.log(localStorage.getItem("refresh_token"));
        })
        .catch((error) => {
            console.log(error);
        });
};
*/
export const auth = {
    authByLocalToken: function () {
        return localStorage.getItem("access_token");
    },
    logout: function () {
        localStorage.clear();
        router.push("/");
    },
    requestAccessToken: function (username, password) {
        return axios
            .post(`/auth/login`, { username, password })
            .then((response) => {
                localStorage.setItem("access_token", response.data.access_token);
                localStorage.setItem("refresh_token", response.data.refresh_token);
                localStorage.setItem("expires_in", + new Date() + response.data.expires_in - 3600);
                return Promise.resolve();
            })
            .catch((error) => {
                this.logout();
                return Promise.reject(error);
            });
    },
};
