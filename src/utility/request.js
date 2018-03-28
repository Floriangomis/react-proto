import axios from 'axios';

export let postRequest = (data, url) => {
    return axios.post(url, data)
};