import axios from "axios";

const myAxios = axios.create({
    headers: {
        "Access-Control-Allow-Origin": "*",
        client_id: process.env.CLIENT_ID,
    },
    baseURL: process.env.API_URL,
});

myAxios.interceptors.request.use(
    function () {
        const access_token = localStorage.getItem("access_token");
        if (!access_token) {
            const config = sendRefreshToken();
            return config;
        }
    },
    function (error) {
        // Faça algo com erro da solicitação
        return Promise.reject(error);
    }
);

async function sendRefreshToken() {
    axios
        .post(`/auth/refresh`, localStorage.getItem("refresh_token"))
        .then((response) => {
            localStorage.setItem("access_token", response.data.access_token);
            localStorage.setItem("refresh_token", response.data.refresh_token);
        })
        .catch((error) => {
            console.log(error);
        });
}

export default myAxios;
