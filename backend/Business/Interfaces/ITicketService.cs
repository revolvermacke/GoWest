using Business.Models;
using Data.Entities;

namespace Business.Interfaces;

public interface ITicketService
{
    Task<ResponseResult<TicketModel>> CreateTicketAsync(string type);
    Task<ResponseResult<IEnumerable<TicketModel>>> GetAllTicketsAsync();
    Task<ResponseResult<TicketModel>> GetTicketByIdAsync(Guid id);
    Task<ResponseResult<TicketModel>> UseTicketAsync(Guid id);
}
