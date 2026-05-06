const BASE_URL = 'https://localhost:7059';

export async function apiFetch(endpoint, options = {}) {
    const token = localStorage.getItem("token");

    const res = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` }),
            ...(options.headers || {})
        },
    });

    if (res.status === 400) {
        localStorage.removeItem("token");
        window.location.href = "/login";
        return;
    }

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'API request failed');
    }

    if (res.status === 204) return null;

    return res.json();
}