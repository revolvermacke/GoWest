namespace Business.Models;

public class TicketModel
{
    public Guid Id { get; set; }
    public DateTime ValidFrom { get; set; }
    public DateTime ValidUntil { get; set; }
    public string Type { get; set; } = null!;
    public decimal Price { get; set; }
    public string Status { get; set; } = "active";
}
