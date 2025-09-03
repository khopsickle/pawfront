import { describe, it, expect, vi } from 'vitest';

vi.mock('../getDogApiKey', () => ({
    getDogApiKey: () => 'mocked-api-key',
}));

describe('axiosClient', () => {
    it('should configure Axios with mocked API key', async () => {
        const { createAxiosClient } = await import('../axiosClient');

        const axiosClient = createAxiosClient();

        expect(axiosClient.defaults.baseURL).toBe(
            'https://api.thedogapi.com/v1',
        );
        expect(axiosClient.defaults.headers['x-api-key']).toBe(
            'mocked-api-key',
        );
    });
});
