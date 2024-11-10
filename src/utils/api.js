import axios from "axios";

export const apiUrl = "https://16.design.htmlacademy.pro/guess-melody";

axios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers["X-Token"] = token;
    }
    return config;
});
