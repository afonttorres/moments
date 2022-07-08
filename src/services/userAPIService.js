import axios from 'axios';
const baseUrl = "http://localhost:8080";

export const userAPIService = {
    getAllUsers() {
        const users = axios.get(`${baseUrl}/users`).then(res => res.data)
        return users;
    },
    getUser(id){
        const user = axios.get(`${baseUrl}/users/${id}`).then(res=>res.data)
        return user;
    }
}