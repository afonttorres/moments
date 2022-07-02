import axios from 'axios';
import { dataService } from './dataServices';
import { userService } from './userService';
const baseUrl = 'https://62b41b86530b26da4cb67c57.mockapi.io';

export const momentService = {
    getAllMoments() {
        const moments = axios.get(`${baseUrl}/moments`).then(res => {
            return res.data
        })
        return moments;
    },
    postMoment(moment) {
        const postedMoment = axios.post(`${baseUrl}/moments`, moment).then(res => {
            return res.data;
        })
        return postedMoment;
    },
    deleteMoment(id) {
        const deletedMoment = axios.delete(`${baseUrl}/moments/${id}`).then(res => {
            return res.data;
        })
        return deletedMoment;
    },
    updateMoment(moment, id) {
        const updatedMoment = axios.put(`${baseUrl}/moments/${id}`, moment).then(res => {
            return res.data;
        })
        return updatedMoment;
    },
    likeMoment(moment, id) {
        let likedMoment = { ...moment, isLiked: !moment.isLiked }
        const updatedMoment = axios.put(`${baseUrl}/moments/${id}`, likedMoment).then(res => {
            return res.data;
        })
        return updatedMoment;
    },
    saveMoment(moment, id) {
        let savedMoment = { ...moment, isSaved: !moment.isSaved }
        const updatedMoment = axios.put(`${baseUrl}/moments/${id}`, savedMoment).then(res => {
            return res.data;
        })
        return updatedMoment;
    },
    getMoment(id) {
        const moment = axios.get(`${baseUrl}/moments/${id}`).then(res => {
            return res.data;
        })
        return moment;
    },
    searchMoment(search) {
        const moments = axios.get(`${baseUrl}/moments`).then(res => {
            if (res.data) {
                let suggestions = [];
                for (let moment of res.data) {
                    if (moment.description.includes(search)) suggestions.push(moment);
                }
                return suggestions;
            }
        })
        return moments;
    },
    getProfileMoments(id) {
        const profMoments = axios.get(`${baseUrl}/moments`).then(res => {
            if (res.data) {
                let moments = [];
                for (let moment of res.data) {
                    if (parseInt(moment.userId) === parseInt(id)) moments.push(moment);
                }
                return moments;

            }
        })
        return profMoments;
    },
    getProfileIds() {
        const momentsIds = axios.get(`${baseUrl}/moments`).then(res => {
            if (res.data) {
                let ids = [];
                for (let moment of res.data) {
                    ids.unshift(parseInt(moment.id));
                }
                return ids;

            }
        })
        return momentsIds;
    }
}