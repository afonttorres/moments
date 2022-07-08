import axios from 'axios';
import { dataService } from './dataServices';
import { generalServices } from './generalServices';
const baseUrl = "http://localhost:8080";
const loggedId = parseInt(dataService.getLoggedUser());


export const momentAPIService = {
    getAllMoments() {
        const moments = axios.get(`${baseUrl}/moments`).then(res => {
            return res.data
        })
        return moments;
    },
    postMoment(moment) {
        const castedMoment = { ...generalServices.castObj(moment, ['imgUrl', 'location', 'description']), userId: loggedId };
        const postedMoment = axios.post(`${baseUrl}/moments`, castedMoment).then(res => {
            return res.data;
        })
        return postedMoment;
    },
    deleteMoment(id) {
        console.log(loggedId);
        const deletedMoment = axios.delete(`${baseUrl}/moments/${id}`, { data: { "id": loggedId } }).then(res => {
            return res.data;
        })
        return deletedMoment;
    },
    updateMoment(moment) {
        const castedMoment = { ...generalServices.castObj(moment, ['imgUrl', 'location', 'description']), userId: loggedId };
        const updatedMoment = axios.put(`${baseUrl}/moments/${moment.id}`, castedMoment).then(res => {
            return res.data;
        })
        return updatedMoment;
    },
    likeMoment(id) {
        const updatedMoment = axios.patch(`${baseUrl}/moments/${id}/like`, { "id": loggedId }).then(res => {
            return res.data;
        })
        return updatedMoment;
    },
    saveMoment(id) {
        const updatedMoment = axios.patch(`${baseUrl}/moments/${id}/save`, { "id": loggedId }).then(res => {
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
        const suggestions = axios.get(`${baseUrl}/moments?search=${search}`).then(res => {
            return res.data;
        })
        return suggestions;
    },
    getUserMoments(id) {
        const userMoments = axios.get(`${baseUrl}/users/${id}/moments`).then(res => res.data);
        return userMoments;
    },
    getUserMomentsIds(id) {
        const momentsIds = axios.get(`${baseUrl}/users/${id}/moments`).then(res => {
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