
const BASE_URL = 'https://localhost:7059/';

export async function apiFetch(endpoint, options = {}) {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        ...options,
    });

    if (!res.ok) {
        const error = await res.text();
        throw new Error(error || 'API request failed');
    }
    
    return res.json();
}