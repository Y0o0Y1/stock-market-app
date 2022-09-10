
import { Api } from '../../API/UserApi'
export const api = {
    registerUser(userData) {
        console.log(userData)
        return Api.post("/register", userData)
    },
    logIn(userData) {
        return Api.post("/login", userData)
    }
}