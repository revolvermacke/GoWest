using Business.Factories;
using Business.Interfaces;
using Business.Models;
using System.Diagnostics;

namespace Business.Services;

public class TicketService(ITicketRepository ticketRepository) : ITicketService
{
    private readonly ITicketRepository _ticketRepository = ticketRepository;

    public async Task<ResponseResult<TicketModel>> CreateTicketAsync(string type)
    {
        if (string.IsNullOrWhiteSpace(type))
            return ResponseResult<TicketModel>.BadRequest("Input must have a value");

        try
        {
            var ticket = TicketFactory.Create(type);
            await _ticketRepository.AddAsync(ticket);

            var model = TicketFactory.ToModel(ticket);

            return ResponseResult<TicketModel>.Ok(model);
        }
        catch(Exception ex)
        {
            Debug.WriteLine(ex.Message);
            return ResponseResult<TicketModel>.Error("Failed to create ticket.");
        }

    }

    public async Task<ResponseResult<IEnumerable<TicketModel>>> GetAllTicketsAsync()
    {

        try
        {
            var tickets = await _ticketRepository.GetAllAsync();

            if(tickets == null || !tickets.Any())
                return ResponseResult<IEnumerable<TicketModel>>.NotFound("No tickets found");

            var model = tickets.Select(TicketFactory.ToModel).ToList();

            return ResponseResult<IEnumerable<TicketModel>>.Ok(model);
        }
        catch (Exception ex)
        {
            Debug.WriteLine(ex.Message);
            return ResponseResult<IEnumerable<TicketModel>>.Error("Failed to get tickets.");
        }
    }

    public async Task<ResponseResult<TicketModel>> GetTicketByIdAsync(Guid id)
    {
        try
        {
            var ticket = await _ticketRepository.GetByIdAsync(id);

            if (ticket == null)
                return ResponseResult<TicketModel>.NotFound("Ticket not found");

            var model = TicketFactory.ToModel(ticket);

            return ResponseResult<TicketModel>.Ok(model);
        }
        catch (Exception ex)
        {
            Debug.WriteLine(ex.Message);
            return ResponseResult<TicketModel>.Error("Failed to get ticket.");
        }
    }

}