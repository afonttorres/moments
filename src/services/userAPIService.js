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
    createUser(req) {
        const newUser = axios.post(`${baseUrl}/users`, req).then(res => res.data);
        return newUser;
    },
    updateUser(req) {
        const updatedUser = axios.put(`${baseUrl}/users/${req.id}`, req).then(res => res.data);
        return updatedUser;
    },
    logUser(req) {
        const logged = axios.put(`${baseUrl}/users/log`, req).then(res => res.data);
        return logged;
    }
}