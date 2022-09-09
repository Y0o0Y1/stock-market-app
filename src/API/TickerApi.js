import axios from "axios";

export const Api = axios.create({
    // eslint-disable-next-line no-undef
    baseURL: process.env.REACT_APP_API_TICKER_URL,
    headers: { "Authorization": "Bearer tqXNNLuS1QlbrRA_psCyZ7yhmq99m4Gb" }
});



Api.defaults.params = {};
Api.interceptors.request.use(
    async (config) => {
        console.log("Api Config", config)
        return config
    },
    (error) => {
        console.log(error)

    }
);

Api.interceptors.response.use(
    (response) => {
        console.log(response)
        return response
    },
    (error) => {
        return Promise.reject(error);
    }
);

