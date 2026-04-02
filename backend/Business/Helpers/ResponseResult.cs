using System.Net.NetworkInformation;

public class ResponseResult<T>
{
    public bool Success { get; init; }
    public T? Data { get; init; }
    public string? ErrorMessage { get; init; }
    public int StatusCode { get; init; }

    private ResponseResult(bool success, T? data, string? errorMessage, int statusCode)
    {
        Success = success;
        Data = data;
        ErrorMessage = errorMessage;
        StatusCode = statusCode;
    }

    public static ResponseResult<T> Ok(T data, int statusCode = 200)
        => new(true, data, null, statusCode);

    public static ResponseResult<T> Error(string errorMessage, int statusCode = 400)
        => new(false, default, errorMessage, statusCode);

    public static ResponseResult<T> NotFound(string message, int statusCode = 404)
        => new(false, default, message, statusCode);

    public static ResponseResult<T> BadRequest(string message, int statusCode = 400)
        => new(false, default, message, statusCode);
}