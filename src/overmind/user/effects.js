
import { Api } from '../../API/UserApi'
export const api = {
    getPosts() {
        console.log("from get posts")
        return Api.get('https://jsonplaceholder.typicode.com/posts')
    },
    registerUser(userData) {
        console.log(userData)
        return Api.post("/register", userData)
    },
    logIn(userData) {
        return Api.post("/login", userData)
    }
}
