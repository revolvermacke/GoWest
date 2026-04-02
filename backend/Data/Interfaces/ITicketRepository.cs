using Data.Entities;

public interface ITicketRepository
{
    Task<TicketEntity> AddAsync(TicketEntity ticket);
    Task<IEnumerable<TicketEntity>> GetAllAsync();
    Task<TicketEntity?> GetByIdAsync(Guid id);
}