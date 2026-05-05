const BASE_URL = 'https://localhost:7059';

export async function apiFetch(endpoint, options = {}) {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...(options.headers || {})
        },
    });

    if (!res.ok) {
        const error = await res.text();
        throw new Error(error || 'API request failed');
    }

    if (res.status === 204) return null;

    return res.json();
}