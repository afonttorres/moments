import axios from 'axios';
import { authUtil } from '../utils/auth';
import { formatUtil } from '../utils/format';
const baseUrl = "http://localhost:8080";


export const momentAPIService = {
    getAllMoments() {
        const moments = axios.get(`${baseUrl}/moments`)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return { error: err.response.data.message };
            })
        return moments;
    },
    postMoment(moment) {
        const castedMoment = { ...formatUtil.castObj(moment, ['imgUrl', 'location', 'description']), userId: parseInt(authUtil.getLoggedUser()) };
        const postedMoment = axios.post(`${baseUrl}/moments`, castedMoment)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return { error: err.response.data.message };
            })
        return postedMoment;
    },
    deleteMoment(id) {
        const deletedMoment = axios.delete(`${baseUrl}/moments/${id}`)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return { error: err.response.data.message };
            })
        return deletedMoment;
    },
    updateMoment(moment) {
        const castedMoment = { ...formatUtil.castObj(moment, ['imgUrl', 'location', 'description']), userId: parseInt(authUtil.getLoggedUser()) };
        const updatedMoment = axios.put(`${baseUrl}/moments/${moment.id}`, castedMoment)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return { error: err.response.data.message };
            })
        return updatedMoment;
    },
    getMoment(id) {
        const moment = axios.get(`${baseUrl}/moments/${id}`).then(res => {
            return res.data;
        })
            .catch(err => {
                return { error: err.response.data.message };
            })
        return moment;
    },
    searchMoment(search) {
        const suggestions = axios.get(`${baseUrl}/moments?search=${search}`)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return { error: err.response.data.message };
            })
        return suggestions;
    },
    getUserMoments(id) {
        const userMoments = axios.get(`${baseUrl}/users/${id}/moments`)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return { error: err.response.data.message };
            })
        return userMoments;
    },
    getUserMomentsIds(id) {
        const momentsIds = axios.get(`${baseUrl}/users/${id}/moments`)
            .then(res => {
                if (res.data) {
                    let ids = [];
                    for (let moment of res.data) {
                        ids.unshift(parseInt(moment.id));
                    }
                    return ids;
                }
            })
            .catch(err => {
                return { error: err.response.data.message };
            })
        return momentsIds;
    },
    getUserLikes() {
        const moments = axios.get(`${baseUrl}/fav-moments`)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return { error: err.response.data.message };
            })
        return moments;
    },
    getUserSaves() {
        const moments = axios.get(`${baseUrl}/saved-moments`)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return { error: err.response.data.message };
            })
        return moments;
    }
}