import axios from 'axios';
import { authUtil } from '../utils/auth';
const baseUrl = "http://localhost:8080";

export const commentAPIService = {
    getAllComments() {
        const comments = axios.get(`${baseUrl}/comments`)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return { error: err.response.data.message };
            })
        return comments;
    },
    getMomentComents(id) {
        const comments = axios.get(`${baseUrl}/moments/${id}/comments`)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return { error: err.response.data.message };
            })
        return comments;
    },
    postComment(req) {
        const comment = axios.post(`${baseUrl}/comments`, { ...req, userId: parseInt(authUtil.getLoggedUser()) })
            .then(res => {
                return res.data
            })
            .catch(err => {
                return { error: err.response.data.message };
            })
        return comment;
    }
}