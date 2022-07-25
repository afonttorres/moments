import axios from 'axios';
const baseUrl = "http://localhost:8080";

export const userAPIService = {
    getAllUsers() {
        const users = axios.get(`${baseUrl}/users`)
            .then(res => res.data)
            .catch(err => {
                return err.response.data.message;
            })
        return users;
    },
    getUser(id) {
        const user = axios.get(`${baseUrl}/users/${id}`)
            .then(res => res.data)
            .catch(err => {
                return err.response.data.message;
            })
        return user;
    },
    createUser(req) {
        const newUser = axios.post(`${baseUrl}/users`, req)
            .then(res => res.data)
            .catch(err => {
                return err.response.data.message;
            })
        return newUser;
    },
    updateUser(req) {
        const updatedUser = axios.put(`${baseUrl}/users/${req.id}`, req)
            .then(res => res.data)
            .catch(err => {
                return err.response.data.message;
            })
        return updatedUser;
    },
    logUser(req) {
        const logged = axios.put(`${baseUrl}/users/log`, req)
            .then(res => res.data)
            .catch(err => {
                return err.response.data.message;
            })
        return logged;
    }
}