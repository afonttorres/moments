import axios from 'axios';
import { authUtil } from '../utils/auth';
const baseUrl = "http://localhost:8080";

export const likeAPIService = {
    like(id) {
        const like = axios.post(`${baseUrl}/likes`, { momentId: id, likerId: parseInt(authUtil.getLoggedUser()) })
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return { error: err.response.data.message };
            })
        return like;
    }
}