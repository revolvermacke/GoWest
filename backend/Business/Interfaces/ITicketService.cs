using Business.Models;
using Data.Entities;

namespace Business.Interfaces;

public interface ITicketService
{
    Task<ResponseResult<TicketModel>> CreateTicketAsync(string type);
}
