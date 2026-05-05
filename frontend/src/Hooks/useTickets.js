import { useState, useEffect } from "react";
import { createTicket } from "../api/ticketApi";



export function useTickets() {
    const [tickets, setTickets] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
            const saved = localStorage.getItem("ticket");

            if (!saved) return;

            const parsed = JSON.parse(saved);

            const now = new Date();
            const validUntil = new Date(parsed.validUntil);

            // if expired → remove immediately
            if (validUntil <= now) {
                localStorage.removeItem("ticket");
                return;
            }

            // if not expired → set timer
            setTickets(parsed);

            const timeout = validUntil - now;

            const timer = setTimeout(() => {
                setTickets(null);
                localStorage.removeItem("ticket");
            }, timeout);

            return () => clearTimeout(timer);

        }, []);

    async function buyTicket(type) {
        setLoading(true);
        try {
            const data = await createTicket(type);
            setTickets(data);

            localStorage.setItem("ticket", JSON.stringify(data));
        }
        catch (error) {
            console.error('Failed to buy ticket:', error);

        } finally {
            setLoading(false);
        }
    }

    function clearTicket() {
        setTickets(null);
        localStorage.removeItem("ticket");
    }

    return { tickets, loading, buyTicket, clearTicket };
}