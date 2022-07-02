import axios from 'axios';

const baseUrl = 'https://62b41b86530b26da4cb67c57.mockapi.io';

export const userService = {
    getUsers() {
        const users = axios.get(`${baseUrl}/users`).then(res => {
            if (res) return res.data;
        })
        return users;
    },
    getUser(id) {
        const user = axios.get(`${baseUrl}/users/${id}`).then(res => {
            if (res) return res.data;
        })
        return user;
    },
    createUser(data){
        const newUser = axios.post(`${baseUrl}/users`, data).then(res => {
            if(res) return res.data;
        })
        return newUser;
    }
}