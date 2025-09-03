import { describe, it, expect } from 'vitest';
import { getDogApiKey } from '../getDogApiKey';

describe('getDogApiKey', () => {
    it('throws if env variable is missing', () => {
        expect(() => getDogApiKey({})).toThrow(
            'Missing VITE_DOG_API_KEY environment variable',
        );
    });

    it('returns the API key if present', () => {
        expect(getDogApiKey({ VITE_DOG_API_KEY: 'test-key' })).toBe('test-key');
    });
});
