import axios from 'axios';
import { userService } from './userService';
import mockUser from '../mockUser.json';
const baseUrl = 'https://62b41b86530b26da4cb67c57.mockapi.io';

export const momentService = {
    getAllMoments() {
        const moments = axios.get(`${baseUrl}/moments`).then(res => {
            return res.data
        })
        return moments;
    },
    postMoment(moment) {
        let momentUser = { ...moment, "user": mockUser[0] }
        const postedMoment = axios.post(`${baseUrl}/moments`, momentUser).then(res => {
            return res.data;
        })
        return postedMoment;
    },
    deleteMoment(id){
        const deletedMoment = axios.delete(`${baseUrl}/moments/${id}`).then(res =>{
            return res.data;
        })
        return deletedMoment;
    },
    updateMoment(moment, id){
        const updatedMoment = axios.put(`${baseUrl}/moments/${id}`, moment).then(res =>{
            return res.data;
        })
        return updatedMoment;
    },
    likeMoment(moment, id){
        let likedMoment = {...moment, isLiked: !moment.isLiked}
        const updatedMoment = axios.put(`${baseUrl}/moments/${id}`, likedMoment).then(res =>{
            return res.data;
        })
        return updatedMoment;
    },
    getMoment(id){
        const moment = axios.get(`${baseUrl}/moments/${id}`).then(res => {
            return res.data;
        })
        return moment;
    }
}