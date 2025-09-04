type DogApiEnv = ImportMetaEnv & {
    VITE_DOG_API_KEY?: string;
};

/**
 * Retrieves the Dog API key from environment object.
 *
 * @param {DogApiEnv} env - defaults to `import.meta.env`
 * @throws {Error} if `VITE_DOG_API_KEY` is missing
 * @returns {string} The Dog API key
 */
export function getDogApiKey(env: DogApiEnv = import.meta.env) {
    if (!env.VITE_DOG_API_KEY) {
        throw new Error('Missing VITE_DOG_API_KEY environment variable');
    }
    return env.VITE_DOG_API_KEY;
}
