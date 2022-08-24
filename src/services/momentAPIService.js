import axios from 'axios';
import { formatUtil } from '../utils/format';
import { AuthService } from './AuthService';

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = false;
axios.interceptors.request.use(function (config) {
  const token = AuthService.getAuth().token;
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});


// axios.interceptors.response.use(
//     function (response) {
//       // CODE Executes in HTTP Status 2XX response
//       // You Code Is IMPORTANT Here!
//       console.log(response);
//       return response;
//     },
//     function (error) {
//       // CODE Executes in no HTTP Status 2XX response
//       // You Code Is IMPORTANT Here!
//       console.log(error.response);
//       return Promise.reject(error);
//     }
//   );


export const momentAPIService = {
    getAllMoments() {
        const moments = axios.get(`/moments`)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return { error: err.response.data.message };
            })
        return moments;
    },
    postMoment(moment) {
        const castedMoment = { ...formatUtil.castObj(moment, ['imgUrl', 'location', 'description'])};
        console.log(castedMoment)
        const postedMoment = axios.post(`/moments`, castedMoment)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return { error: err.response.data.message };
            })
        return postedMoment;
    },
    deleteMoment(id) {
        const deletedMoment = axios.delete(`/moments/${id}`)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return { error: err.response.data.message };
            })
        return deletedMoment;
    },
    updateMoment(moment) {
        const castedMoment = { ...formatUtil.castObj(moment, ['imgUrl', 'location', 'description'])};
        const updatedMoment = axios.put(`/moments/${moment.id}`, castedMoment)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return { error: err.response.data.message };
            })
        return updatedMoment;
    },
    getMoment(id) {
        const moment = axios.get(`/moments/${id}`).then(res => {
            return res.data;
        })
            .catch(err => {
                return { error: err.response.data.message };
            })
        return moment;
    },
    searchMoment(search) {
        const suggestions = axios.get(`/moments?search=${search}`)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return { error: err.response.data.error };
            })
        return suggestions;
    },
    getUserMoments(id) {
        const userMoments = axios.get(`/users/${id}/moments`)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return { error: err.response.data.message };
            })
        return userMoments;
    },
    getUserMomentsIds(id) {
        const momentsIds = axios.get(`/users/${id}/moments`)
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
        const moments = axios.get(`/fav-moments`)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return { error: err.response.data.error };
            })
        return moments;
    },
    getUserSaves() {
        const moments = axios.get(`/saved-moments`)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return { error: err.response.data.error };
            })
        return moments;
    }
}