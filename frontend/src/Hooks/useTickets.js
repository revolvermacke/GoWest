import { useState, useEffect } from "react";
import { createTicket } from "../api/ticketApi";

export function useTickets() {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("tickets");
        if (!saved) return;

        const parsed = JSON.parse(saved);
        const now = new Date();

        const validTickets = parsed.filter(t => new Date(t.validUntil) > now);

        setTickets(validTickets);
        localStorage.setItem("tickets", JSON.stringify(validTickets));

        const timers = validTickets.map(ticket => {
            const timeout = new Date(ticket.validUntil) - now;

            return setTimeout(() => {
                setTickets(prev => {
                    const updated = prev.filter(t => t.id !== ticket.id);
                    localStorage.setItem("tickets", JSON.stringify(updated));
                    return updated;
                });
            }, timeout);
        });

        return () => timers.forEach(clearTimeout);
    }, []);

    async function buyTicket(type) {
        setLoading(true);
        try {
            const data = await createTicket(type);

            setTickets(prev => {
                const updated = [...prev, data];
                localStorage.setItem("tickets", JSON.stringify(updated));
                return updated;
            });

        } catch (error) {
            console.error('Failed to buy ticket:', error);
        } finally {
            setLoading(false);
        }
    }

    function clearTickets() {
        setTickets([]);
        localStorage.removeItem("tickets");
    }

    return { tickets, loading, buyTicket, clearTickets };
}