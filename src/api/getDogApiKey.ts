export function getDogApiKey(env = import.meta.env) {
    if (!env.VITE_DOG_API_KEY) {
        throw new Error('Missing VITE_DOG_API_KEY environment variable');
    }
    return env.VITE_DOG_API_KEY;
}
