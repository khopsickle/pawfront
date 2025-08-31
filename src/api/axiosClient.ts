import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://dogapi.dog/api/v2',
});

export default axiosClient;
