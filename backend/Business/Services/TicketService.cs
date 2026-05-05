using Business.Constants;
using Business.Factories;
using Business.Interfaces;
using Business.Models;
using System.Diagnostics;

namespace Business.Services;

public class TicketService(ITicketRepository ticketRepository, QrCodeService qrCodeService, TokenService tokenService) : ITicketService
{
    private readonly ITicketRepository _ticketRepository = ticketRepository;
    private readonly QrCodeService _qrCodeService = qrCodeService;
    private readonly TokenService _tokenService = tokenService;

    public async Task<ResponseResult<TicketModel>> CreateTicketAsync(string type)
    {
        if (string.IsNullOrWhiteSpace(type))
            return ResponseResult<TicketModel>.BadRequest("Input must have a value");

        try
        {
            var ticket = TicketFactory.Create(type);

            await _ticketRepository.AddAsync(ticket);

            var model = TicketFactory.ToModel(ticket);

            // Generate QR code for the ticket
            ApplyQrCode(model);

            return ResponseResult<TicketModel>.Ok(model);
        }
        catch (Exception ex)
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

            var model = tickets.Select(TicketFactory.ToModel).ToList();

            // Generate QR code for each ticket
            foreach (var ticket in model)
                ApplyQrCode(ticket);

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

            // Generate QR code for the ticket
            ApplyQrCode(model);

            return ResponseResult<TicketModel>.Ok(model);
        }
        catch (Exception ex)
        {
            Debug.WriteLine(ex.Message);
            return ResponseResult<TicketModel>.Error("Failed to get ticket.");
        }
    }

    public async Task<ResponseResult<TicketModel>> UseTicketAsync(Guid id)
    {
        try
        {
            var ticket = await _ticketRepository.GetByIdAsync(id);

            if (ticket == null)
                return ResponseResult<TicketModel>.NotFound("Ticket not found");

            if (ticket.Status != TicketStatus.Active)
                return ResponseResult<TicketModel>.BadRequest("Ticket not valid");

            if (ticket.ValidUntil < DateTime.UtcNow)
                return ResponseResult<TicketModel>.BadRequest("Ticket expired");

            ticket.Status = TicketStatus.Used;

            await _ticketRepository.UpdateAsync(ticket);

            var model = TicketFactory.ToModel(ticket);

            return ResponseResult<TicketModel>.Ok(model);
        }
        catch (Exception ex)
        {
            Debug.WriteLine(ex.Message);
            return ResponseResult<TicketModel>.Error("Failed to use ticket.");
        }
    }

    private void ApplyQrCode(TicketModel ticket)
    {
        var payload = _tokenService.GenerateQrPayload(ticket);
        ticket.QrCodeBase64 = _qrCodeService.GenerateQrCodeBase64(payload);
    }
}