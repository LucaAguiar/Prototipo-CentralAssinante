import Axios from "axios";


const axios = Axios.create({
    baseURL: "/api/admin"
    //onUploadProgress: function(progressEvent) {},
    //onDownloadProgress: function(progressEvent) {}
});

axios.interceptors.request.use(
    function(config) {
        config["headers"]["Authorization"] = `Bearer ${store.getters["Auth/authToken"]}`;
        if (axios.showLoader) {
            store.dispatch("Loader/startLoading");
        }
        return config;
    },
    function(error) {
        store.dispatch("Loader/endLoading");
        return Promise.reject(error);
    }
);

axios
    .post(`/auth/refresh`, localStorage.getItem("refresh_token"))
    .then((response) => {
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("refresh_token", response.data.refresh_token);
    })
    .catch((error) => {
        console.log(error);
    });

export default axios;