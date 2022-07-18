import axios from 'axios';
import { dataService } from './dataServices';
const baseUrl = "http://localhost:8080";

export const likeAPIService = {
    like(id) {
        const like = axios.post(`${baseUrl}/likes`, { momentId: id, likerId: parseInt(dataService.getLoggedUser()) }).then(res => {
            return res.data
        })
        return like;
    }
}