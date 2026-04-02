using Data.Context;
using Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace Data.Repositories;

public class TicketRepository(AppDbContext context) : ITicketRepository
{
    private readonly AppDbContext _context = context;

    public async Task<TicketEntity> AddAsync(TicketEntity ticket)
    {
        _context.Add(ticket);
        await _context.SaveChangesAsync();

        return ticket;
    }

    public async Task<IEnumerable<TicketEntity>> GetAllAsync()
    {
        return await _context.Tickets.ToListAsync();
    }

    public async Task<TicketEntity?> GetByIdAsync(Guid id)
    {
        return await _context.Tickets.FirstOrDefaultAsync(t => t.Id == id);
    }
}
