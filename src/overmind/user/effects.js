
import * as axios from 'axios'

export const api = {
    getPosts() {
        console.log("from get posts")
        return axios.get('https://jsonplaceholder.typicode.com/posts')
    },
    registerUser(userData) {
        return axios.post("https://reqres.in/api/register", userData)

    }
}
