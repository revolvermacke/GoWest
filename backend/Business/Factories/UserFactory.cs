using Data.Entities;

namespace Business.Factories;

public static class UserFactory
{
    public static UserEntity Create(string email, string passwordHash)
    {
        return new UserEntity
        {
            Id = Guid.NewGuid(),
            Email = email,
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(passwordHash)
        };
    }
}
