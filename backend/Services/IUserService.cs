using backend.DTO;

namespace backend.Services
{
    public interface IUserService
    {
        Task<UserResponseDTO> CreateUser(UserCreateDTO userDto);
        Task<UserResponseDTO?> DeleteUser(long id);
        Task<List<UserResponseDTO>> GetAllUsers();
        Task<UserResponseDTO?> GetUserById(long id);
        Task<UserResponseDTO?> UpdateUser(long id, UserResponseDTO userDto);
    }
}