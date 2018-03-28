import { post } from 'axios';

export let postRequest = (data, url, options) => {
    return post(url, data, options)
};