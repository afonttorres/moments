import axios from 'axios';
const baseUrl = "http://localhost:8080";
export const momentAPIService = {
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
        console.log(moment, id);
        const updatedMoment = axios.put(`${baseUrl}/moments/${id}`, moment).then(res => {
            return res.data;
        })
        return updatedMoment;
    },
    likeMoment(moment, id) {
        const updatedMoment = axios.patch(`${baseUrl}/moments/${id}/like`, moment).then(res => {
            return res.data;
        })
        return updatedMoment;
    },
    saveMoment(moment, id) {
        const updatedMoment = axios.patch(`${baseUrl}/moments/${id}/save`, moment).then(res => {
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
    getProfileIds(id) {
        const momentsIds = axios.get(`${baseUrl}/moments`).then(res => {
            if (res.data) {
                let ids = [];
                for (let moment of res.data) {
                    if (parseInt(moment.userId) === parseInt(id)) ids.unshift(parseInt(moment.id));
                }
                return ids;

            }
        })
        return momentsIds;
    }
}