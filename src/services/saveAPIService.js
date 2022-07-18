import axios from 'axios';
import { dataService } from './dataServices';
const baseUrl = "http://localhost:8080";

export const saveAPIService = {
    save(id) {
        const save = axios.post(`${baseUrl}/saves`, { momentId: id, saverId: parseInt(dataService.getLoggedUser()) }).then(res => {
            return res.data
        })
        return save;
    }
}