import axios from 'axios';
const baseUrl = "http://localhost:8080";

export const commentAPIService = {
    getAllComments() {
        const comments = axios.get(`${baseUrl}/comments`).then(res => {
            return res.data;
        })
        return comments;
    },
    postComment(req){
        const comment = axios.post(`${baseUrl}/comments`, req).then(res =>{
            return res.data
        })
        return comment;
    }
}