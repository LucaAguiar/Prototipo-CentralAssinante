import Axios from "axios";
import { auth } from "../auth/auth";

const axios = Axios.create({
    baseURL: "/v2/api",
});

axios.interceptors.request.use(
    function (config) {
        const authToken = auth.authByLocalToken();
        if (authToken) {
            config["headers"]["Authorization"] = `Bearer ${authToken}`;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.response.status === 401) {
            auth.logout();
            return Promise.reject(error);
        }
    }
);

export default axios;
