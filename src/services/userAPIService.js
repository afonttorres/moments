import axios from 'axios';
const baseUrl = "http://localhost:8080";

export const userAPIService = {
    getAllUsers() {
        const users = axios.get(`${baseUrl}/users`).then(res => res.data);
        return users;
    },
    getUser(id) {
        const user = axios.get(`${baseUrl}/users/${id}`).then(res => res.data);
        return user;
    },


    // {
    //     "username": "rfv",
    //     "email": "email",
    //     "name": "rafel",
    //     "password": "password123"
    // }

    createUser(req) {
        const newUser = axios.post(`${baseUrl}/users`, req).then(res => res.data);
        return newUser;
    },

    // {
    //     "email":"nft@gmail.com",
    //     "password": "password123"
    // }

    logUser(req) {
        const logged = axios.put(`${baseUrl}/users/log`, req).then(res => res.data);
        return logged;
    }
}