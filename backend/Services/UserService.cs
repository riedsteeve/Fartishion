using backend.Models;
using backend.DTO;
using Microsoft.EntityFrameworkCore;
using BCrypt.Net;


namespace backend.Services
{
    public class UserService(PostgresContext context, IHttpContextAccessor httpContextAccessor) : IUserService
    {
        private readonly PostgresContext _context = context;
        private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;

        //On récupère tout les Users non supprimés
        public async Task<List<UserResponseDTO>> GetAllUsers()
        {
            var users = await _context.Users
                .Where(u => u.IsDeleted != true)
                .ToListAsync();
            return users.Select(u => u.ToDTO()).ToList();
        }

        //Récupères les users par Id 
        public async Task<UserResponseDTO?> GetUserById(long id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null || user.IsDeleted == true) return null;
            return user.ToDTO();
        }

        //Creer un nouveau User
        public async Task<UserResponseDTO> CreateUser(UserCreateDTO userDto)
        {
            string motDePassHache = BCrypt.Net.BCrypt.HashPassword(userDto.Mdp);

            var user = new User
            {
                Nom = userDto.Nom,
                Prenom = userDto.Prenom,
                Email = userDto.Email,
                Mdp = motDePassHache,
                Photo = userDto.Photo,
                Rôle = "User",
                IsDeleted = false
            };
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return user.ToDTO();
        }

        //Mise a jour 
        public async Task<UserResponseDTO?> UpdateUser(long id, UserResponseDTO userDto)
        {
            //on vérifie si le User est connectée et si il n'est pas supprimé
            var httpContext = _httpContextAccessor.HttpContext;
            if(httpContext == null) throw new InvalidOperationException("Context HTTP indisponible.");

            long? userId = AuthServiceUserConnectedUserVerify.GetConnectedUserId(httpContext);
            if (userId == null) throw new UnauthorizedAccessException("Utilisateur non connecté");

            var existingUser = await _context.Users.FindAsync(id);
            if (existingUser == null || existingUser.IsDeleted == true)
                return null;

            existingUser.Nom = userDto.Nom;
            existingUser.Prenom = userDto.Prenom;
            existingUser.Email = userDto.Email;
            existingUser.Photo = userDto.Photo;

            await _context.SaveChangesAsync();

            return existingUser.ToDTO();
        }

        //Supression
        public async Task<UserResponseDTO?> DeleteUser(long id)
        {
            var httpContext = _httpContextAccessor.HttpContext;
            if(httpContext == null) throw new InvalidOperationException("Context HTTP indisponible.");

            long? userId = AuthServiceUserConnectedUserVerify.GetConnectedUserId(httpContext);
            if (userId == null) throw new UnauthorizedAccessException("Utilisateur non connecté");

            var user = await _context.Users.FindAsync(id);
            if (user == null || user.IsDeleted == true)
                return null;

            user.IsDeleted = true;
            await _context.SaveChangesAsync();
            return user.ToDTO();
        }
    }
}
