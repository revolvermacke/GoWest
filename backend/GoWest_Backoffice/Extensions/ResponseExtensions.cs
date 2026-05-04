using Microsoft.AspNetCore.Mvc;

namespace GoWest_Backoffice.Extensions;

public static class ResponseExtensions
{
    public static IActionResult ToActionResult<T>(this ResponseResult<T> result)
    {
        return result.StatusCode switch
        {
            StatusCodes.Status200OK => new OkObjectResult(result.Data),
            StatusCodes.Status404NotFound => new NotFoundObjectResult(result.ErrorMessage),
            StatusCodes.Status400BadRequest => new BadRequestObjectResult(result.ErrorMessage),
            StatusCodes.Status500InternalServerError => new ObjectResult(result.ErrorMessage)
            {
                StatusCode = 500
            },
            _ => new ObjectResult("Unexpected error") { StatusCode = 500 }
        };
    }
}