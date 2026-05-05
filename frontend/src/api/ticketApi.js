import { apiFetch } from "./client";



export function createTicket(type) {
    return apiFetch('/api/ticket', {
        method: 'POST',
        body: JSON.stringify({type}),
    });
}

export function getTickets() {
    return apiFetch('/api/ticket');
}

export function getTicket(id) {
    return apiFetch(`/api/ticket/${id}`);
}

export function useTicket(id) {
    return apiFetch(`/api/ticket/${id}/use`, {
        method: 'POST',
    });
}