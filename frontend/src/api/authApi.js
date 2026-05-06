import { apiFetch } from "./client";

export function login(email, password) {
    return apiFetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
    });
}

export function register(email, password) {
    return apiFetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
    });
}