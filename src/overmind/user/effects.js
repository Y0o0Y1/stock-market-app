
import * as axios from 'axios'

export const api = {
    getPosts() {
        console.log("from get posts")
        return axios.get('https://jsonplaceholder.typicode.com/posts')
    },
    registerUser(){
        return axios.post('https://jsonplaceholder.typicode.com/posts')

    }
}
