import axios from 'axios';

const api = axios.create({
    baseURL: 'http://186.251.23.91:9810/api'
});

export default api;