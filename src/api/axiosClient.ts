import axios from 'axios';
import { getDogApiKey } from './getDogApiKey';

/**
 * Creates a pre-configured Axios instance
 *
 * - Base URL is TheDogAPI's endpoint
 * - `x-api-key` retrieved from `getDogApiKey()`
 *
 * @returns configured Axios instance
 *
 * Improvements:
 * - pass in the baseURL and move to a const; would allow better reusability
 */
export function createAxiosClient() {
    return axios.create({
        baseURL: 'https://api.thedogapi.com/v1',
        headers: {
            'x-api-key': getDogApiKey(),
        },
    });
}
/**
 * Default Axios instance for TheDogAPI
 *
 * An instance of `createAxiosClient()` for making requests without recreating the client each time.
 */
export default createAxiosClient();
