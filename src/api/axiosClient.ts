import axios from 'axios';

const apiKey = import.meta.env.VITE_DOG_API_KEY;

if (!apiKey) {
    throw new Error('Missing VITE_DOG_API_KEY environment variable');
}

const axiosClient = axios.create({
    baseURL: 'https://api.thedogapi.com/v1',
    headers: {
        'x-api-key': apiKey,
    },
});

export default axiosClient;
