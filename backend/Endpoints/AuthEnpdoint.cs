using backend.DTO;
using backend.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
namespace backend.Endpoints

{

    public static class AuthEndpoint
    {
        public static void MapAuthEndpoints(this IEndpointRouteBuilder app)
        {
            app.MapPost("/login", async (loginRequestDTO loginDto, AuthService authservice) =>
            {
                var token = await authservice.LoginAsync(loginDto);
                if (token == null)                    
                    return Results.Unauthorized();

                return Results.Ok(new { Token = token });
            });
        }
    }
}

