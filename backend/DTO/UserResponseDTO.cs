namespace backend.DTO;

using backend.Models;

public class UserResponseDTO
{
    public long Id { get; set; }
    public string Nom { get; set; } = null!;
    public string Prenom { get; set; } = null!;
    public string Email { get; set; } = null!;
    public string? Photo { get; set; }
}

public class UserCreateDTO
{
    public string Nom { get; set; } = null!;
    public string Prenom { get; set; } = null!;
    public string Email { get; set; } = null!;
    public string Mdp { get; set; } = null!; 
    public string? Photo { get; set; }
}

public static class UserMappingExtensions
{
    public static UserResponseDTO ToDTO(this User user)
    {
        return new UserResponseDTO
        {
            Id = user.Id,
            Nom = user.Nom,
            Prenom = user.Prenom,
            Email = user.Email,
            Photo = user.Photo,
        };
    }
}