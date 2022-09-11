import axios from "axios";
// eslint-disable-next-line no-undef
const apiToken = process.env.REACT_APP_POLYGON_API_TOKEN

console.log({ apiToken })
export const Api = axios.create({
    // eslint-disable-next-line no-undef
    baseURL: process.env.REACT_APP_API_TICKER_URL,
    headers: { "Authorization": `Bearer ${apiToken}` }
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
        return response.data
    },
    (error) => {
        return Promise.reject(error);
    }
);

