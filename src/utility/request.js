import axios from 'axios';

export let postRequest = (data, url, options) => {
    return axios.post(url, data, options)
};