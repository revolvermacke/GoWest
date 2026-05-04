using Business.Models;
using System.Text.Json;

namespace Business.Services;

public class TokenService
{
    public string GenerateQrPayload(TicketModel ticket)
    {
        var payload = new
        {
            ticketId = ticket.Id,
            exp = ticket.ValidUntil
        };

        return JsonSerializer.Serialize(payload);
    }
}
