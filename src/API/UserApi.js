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
        console.log(response)
        return response
    },
    (error) => {
        return Promise.reject("This Email is Already Registered ", error);
    }
);

