using Business.Dtos;
using Business.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace GoWest_Backoffice.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthController(IAuthService authService) : ControllerBase
{
    private readonly IAuthService _authService = authService;

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterDto dto)
    {
        var token = await _authService.RegisterAsync(dto.Email, dto.Password);
        if (token == null)
            return BadRequest("Email already in use");

        return Ok(new { token });
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] RegisterDto dto)
    {
        var token = await _authService.LoginAsync(dto.Email, dto.Password);
        if (token == null)
            return Unauthorized("Invalid credentials");

        return Ok(new { token });
    }
}
