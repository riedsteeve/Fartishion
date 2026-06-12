using backend.DTO;
using backend.Services;
namespace backend.Endpoints
{

    public static class UserEndpoint
    {
        public static void UserEndpoints(this WebApplication app)
        {
            /// <summary>
            /// Récupère tous les utilisateurs.
            /// </summary>
            app.MapGet("/users", async (IUserService userService) =>
            {
                var users = await userService.GetAllUsers();
                return Results.Ok(users);
            }).RequireAuthorization();


            /// <summary>
            /// Récupère un utilisateur par son ID.
            /// </summary>
            app.MapGet("/users/{id}", async (long id, IUserService userService) =>
            {
                var user = await userService.GetUserById(id);
                if (user == null)
                    return Results.NotFound();
                return Results.Ok(user);
            }).RequireAuthorization();


            /// <summary>
            /// Crée un nouvel utilisateur.
            /// </summary>
            app.MapPost("/users", async (UserCreateDTO userDto, IUserService userService) =>
            {
                var createdUser = await userService.CreateUser(userDto);
                return Results.Created($"/users/{createdUser.Id}", createdUser);
            });

            /// <summary>
            /// Met à jour un utilisateur existant.
            /// </summary>
            app.MapPut("/users/{id}", async (long id, UserResponseDTO userDto, IUserService userService) =>
            {
                var updatedUser = await userService.UpdateUser(id, userDto);
                if (updatedUser == null)
                    return Results.NotFound("Aucun utilisateur trouvé avec cet ID.");
                return Results.Ok(updatedUser);
            }).RequireAuthorization();


            /// <summary>
            /// Supprime un utilisateur existant.
            /// </summary>
            app.MapDelete("/users/{id}", async (long id, IUserService userService) =>
            {
                var deleted = await userService.DeleteUser(id);
                if (deleted is null)
                    return Results.NotFound("Aucun utilisateur trouvé avec cet ID.");
                return Results.NoContent();
            }).RequireAuthorization();
        }
    }
}

