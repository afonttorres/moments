import axios from 'axios';
import { AuthService } from './AuthService';

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = false;
axios.interceptors.request.use(function (config) {
    const token = AuthService.getAuth().token;
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
});


// axios.interceptors.response.use(
//     function (response) {
//       // CODE Executes in HTTP Status 2XX response
//       // You Code Is IMPORTANT Here!
//       console.log(response);
//       return response;
//     },
//     function (error) {
//       // CODE Executes in no HTTP Status 2XX response
//       // You Code Is IMPORTANT Here!
//       console.log(error.response);
//       return Promise.reject(error);
//     }
//   );

export const commentAPIService = {
    getAllComments() {
        const comments = axios.get(`/comments`)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return { error: err.response.data.message };
            })
        return comments;
    },
    getMomentComments(id) {
        const comments = axios.get(`/moments/${id}/comments`)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return { error: err.response.data.message };
            })
        return comments;
    },
    postComment(req) {
        console.log(req)
        const comment = axios.post(`/comments`, req)
            .then(res => {
                return res.data
            })
            .catch(err => {
                return { error: err.response.data.error };
            })
        return comment;
    }
}