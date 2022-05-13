import axios from "axios";
import router from "../router/index";

function authByLocalToken() {
    const accessToken = retrieveLocalAccessToken();
    if (accessToken) {
        return accessToken;
    }

    return requestAccessTokenByRefresh()
        .then(() => {
            const accessToken = localStorage.getItem("access_token");
            return accessToken;
        })
        .catch((error) => console.log(error));
}

function authByRefreshToken() {
    return localStorage.getItem("refresh_token");
}

function logout() {
    localStorage.clear();
    router.push("/");
}

function saveLocalToken(access_token, refresh_token, expires_in) {
    const timeNow = Math.round(+new Date() / 1000);
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);
    localStorage.setItem("expire_at", timeNow + expires_in);
}

function retrieveLocalAccessToken() {
    const expireAt = parseInt(localStorage.getItem("expire_at") || 0);
    const authToken = localStorage.getItem("access_token");
    const timeNow = Math.round(+new Date() / 1000);
    return !authToken || timeNow > expireAt ? false : authToken;
}

function requestAccessTokenByRefresh() {
    const refresh_token = authByRefreshToken();
    return axios
        .post(`/auth/refresh`, { refresh_token })
        .then((response) => {
            saveLocalToken(response.data.access_token, response.data.refresh_token, response.data.expires_in);
            return Promise.resolve();
        })
        .catch((error) => {
            this.logout();
            return Promise.reject(error);
        });
}

function requestAccessTokenByPassword(username, password) {
    return axios
        .post(`/auth/login`, { username, password })
        .then((response) => {
            saveLocalToken(response.data.access_token, response.data.refresh_token, response.data.expires_in - 4000);
            return Promise.resolve();
        })
        .catch((error) => {
            this.logout();
            return Promise.reject(error);
        });
}

export const auth = {
    authByLocalToken,
    requestAccessTokenByPassword,
    logout,
};
