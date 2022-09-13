import axios from "axios";
export const Api = axios.create({
    // eslint-disable-next-line no-undef
    baseURL: process.env.REACT_APP_API_USER_URL,
});

Api.defaults.params = {};
Api.interceptors.request.use(
    async (config) => {
        console.log(config)
        return config
    },
    (error) => {
        console.log(error)
    }
);

Api.interceptors.response.use(
    (response) => {
        console.log("Sucesss!",response)
        return response
    },
    (error) => {
        console.log("Status", error)
        return Promise.reject(error.response.data);
    }
);

