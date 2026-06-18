using backend.Models;
using backend.DTO;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace backend.Services
{
    public class AuthService
    {
        private readonly PostgresContext _context;
        private readonly IConfiguration _configuration;

        public AuthService(PostgresContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public async Task<string?> LoginAsync(loginRequestDTO loginDto)
        {
            //On vérifie si le User existe et n'est pas supprimé
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == loginDto.Email && u.IsDeleted != true);
            if (user == null)
                return null;

            //On verifie le mot de passe avec Bcrypt
            bool isPssawordValid = BCrypt.Net.BCrypt.Verify(loginDto.Mdp, user.Mdp);
            if (!isPssawordValid)
                return null;

            //On génère un token JWT si MDP correcte
            var jwtSettings = _configuration.GetSection("jwtSetting");
            var secretKey = jwtSettings["SecretKey"];
            var key = Encoding.UTF8.GetBytes(secretKey!);


            //Génération des claims
            var claims = new[] {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Role, user.Rôle ?? "User")
            };


            //La description du Token
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddHours(2),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            //Et ca transformation en objet lisible pour le front
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }


    //Une fonction pour récupérer l'Id de l'utilisateur connecté à partir du token JWT
    public static class AuthServiceUserConnectedUserVerify
    {
        public static long? GetConnectedUserId(HttpContext httpContext)
        {
            var userIdClaim = httpContext.User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier);
            if (userIdClaim != null && long.TryParse(userIdClaim.Value, out long userId))
            {
                return userId;
            }
            return null;
        }
    }
}
