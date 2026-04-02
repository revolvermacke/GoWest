using Business.Models;
using Data.Entities;

namespace Business.Factories;

public static class TicketFactory
{
    public static TicketEntity Create(string type)
    {
        var now = DateTime.UtcNow;

        var (duration, price) = type switch
        {
            "30min" => (TimeSpan.FromMinutes(30), 10m),
            "60min" => (TimeSpan.FromMinutes(60), 20m),
            _ => throw new ArgumentException("Invalid ticket type")
        };

        return new TicketEntity
        {
            Id = Guid.NewGuid(),
            Type = type,
            Price = price,
            ValidFrom = now,
            ValidUntil = now.Add(duration),
            Status = "active"
        };
    }

    public static TicketModel ToModel(TicketEntity entity)
    {
        return new TicketModel
        {
            Id = entity.Id,
            Type = entity.Type,
            Price = entity.Price,
            ValidFrom = entity.ValidFrom,
            ValidUntil = entity.ValidUntil,
            Status = entity.Status,
        };
    }
}