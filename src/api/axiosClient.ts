import axios from 'axios';
import { getDogApiKey } from './getDogApiKey';

export function createAxiosClient() {
    return axios.create({
        baseURL: 'https://api.thedogapi.com/v1',
        headers: {
            'x-api-key': getDogApiKey(),
        },
    });
}

export default createAxiosClient();
