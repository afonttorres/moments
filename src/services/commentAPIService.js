import axios from 'axios';
import { dataService } from './dataServices';
const baseUrl = "http://localhost:8080";
const loggedId = dataService.getLoggedUser() ? parseInt(dataService.getLoggedUser()) : 1;

export const commentAPIService = {
    getAllComments() {
        const comments = axios.get(`${baseUrl}/comments`).then(res => {
            return res.data;
        })
        return comments;
    },
    getMomentComents(id) {
        const comments = axios.get(`${baseUrl}/moments/${id}/comments`).then(res => {
            return res.data;
        })
        return comments;
    },
    postComment(req) {
        const comment = axios.post(`${baseUrl}/comments`, {...req, userId: loggedId}).then(res => {
            return res.data
        })
        return comment;
    },
}