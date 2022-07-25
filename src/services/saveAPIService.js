import axios from 'axios';
import { authUtil } from '../utils/auth';
const baseUrl = "http://localhost:8080";

export const saveAPIService = {
    save(id) {
        const save = axios.post(`${baseUrl}/saves`, { momentId: id, saverId: parseInt(authUtil.getLoggedUser()) })
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return { error: err.response.data.message };
            })
        return save;
    }
}