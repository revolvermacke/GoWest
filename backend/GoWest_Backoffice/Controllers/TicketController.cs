using Business.Constants;
using Business.Interfaces;
using GoWest_Backoffice.Dtos;
using GoWest_Backoffice.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace GoWest_Backoffice.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TicketController(ITicketService ticketService) : ControllerBase
{
    private readonly ITicketService _ticketService = ticketService;

    [HttpPost]
    public async Task<IActionResult> CreateTicket([FromBody] CreateTicketDto dto)
    {
        if (dto == null)
            return BadRequest("Request body is required");

        if (string.IsNullOrWhiteSpace(dto.Type))
            return BadRequest("Type is required");

        if (dto.Type != TicketTypes.ThirtyMinutes &&
            dto.Type != TicketTypes.SixtyMinutes)
        {
            return BadRequest("Invalid ticket type");
        }

        var result = await _ticketService.CreateTicketAsync(dto.Type);
        return result.ToActionResult();
    }

    [HttpGet]
    public async Task<IActionResult> GetAllTickets()
    {
        var result = await _ticketService.GetAllTicketsAsync();
        return result.ToActionResult();
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetTicketById(Guid id)
    {
        var result = await _ticketService.GetTicketByIdAsync(id);
        return result.ToActionResult();
    }

    [HttpPost("{id}/use")]
    public async Task<IActionResult> UseTicket(Guid id)
    {
        var result = await _ticketService.UseTicketAsync(id);
        return result.ToActionResult();
    }
}