import axios from "axios";
import { overmind } from './../index';
export const Api = axios.create({
    // eslint-disable-next-line no-undef
    baseURL: process.env.REACT_APP_API_USER_URL,
});
if (overmind)
    var actions = overmind?.actions

Api.defaults.params = {};
Api.interceptors.request.use(
    async (config) => {
        actions?.setLoader()
        console.log(config)
        return config
    },
    (error) => {
        console.log(error)
    }
);

Api.interceptors.response.use(
    (response) => {
        actions?.removeLoader()
        console.log(response)
        return response
    },
    (error) => {
        actions?.removeLoader()

        return Promise.reject(error);
    }
);

