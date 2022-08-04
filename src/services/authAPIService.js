import axios from 'axios';
const baseUrl = "http://localhost:8080";

export const authAPIService = {
    login(req) {
        const auth = axios.post(`${baseUrl}/auth/signin`, req)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                let error;
                err.response.data.message ?  error = err.response.data.message  : error = err.response.data.error; 
                return { error: error };
            })
        return auth;
    },
    register(req) {
        const auth = axios.post(`${baseUrl}/auth/signup`, req)
            .then(res => {
                return res.data.message;
            })
            .catch(err => {
                return { error: err.response.data.error};
            })
        return auth;
    }
}