import { apiFetch } from "./client";



export function createTicket(type) {
    return apiFetch('/ticket', {
        method: 'POST',
        body: JSON.stringify({type}),
    });
}

export function getTickets() {
    return apiFetch('/ticket');
}

export function getTicket(id) {
    return apiFetch(`/ticket/${id}`);
}

export function useTicket(id) {
    return apiFetch(`/ticket/${id}/use`, {
        method: 'POST',
    });
}