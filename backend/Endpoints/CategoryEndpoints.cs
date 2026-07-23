using backend.DTO;
using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace backend.Endpoints
{
    public static class CategoryEndpoints
    {
        public static void CategoryEndpoint(this WebApplication app)
        {
            /// <summary>
            /// Récupere toutes les catégories de partitions.
            /// </summary>
            app.MapGet("/Categories", async (ICategoryService categoryService) =>
            {
                var result = await categoryService.GetAllCategories();
                if (result == null || result.Count == 0)
                {
                    return Results.NotFound("Aucune catégorie trouvée.");
                }
                return Results.Ok(result);
            });


            /// <summary>
            /// Récupère une catégorie par son ID.
            /// </summary>
            app.MapGet("/Categories/{id}", async (long id, ICategoryService categoryService) =>
            {
                var result = await categoryService.GetCategoryById(id);
                if (result == null)
                {
                    return Results.NotFound($"Aucune catégorie trouvée pour cet ID {id}.");
                }
                return Results.Ok(result);
            });


            /// <summary>
            /// Crée une nouvelle catégorie.
            /// </summary>
            app.MapPost("/Categories", async (categorycreateDTO category, ICategoryService categoryService) =>
            {
                var result = await categoryService.CreateNewCategory(category);
                return Results.Created($"/Categories/{result.IdCategory}", result);
            }).RequireAuthorization();


            /// <summary>
            /// Modifie une catégorie existante.
            /// </summary>
            app.MapPut("/Categories/{id}", async (long id, categorycreateDTO category, ICategoryService categoryService) =>
            {
                var result = await categoryService.UpdateCategory(id, category);
                if (result == null)
                {
                    return Results.NotFound($"Aucune catégorie trouvée pour cet ID {id}.");
                }
                return Results.Ok(result);
            }).RequireAuthorization();


            /// <summary>
            /// Supprime une catégorie.
            /// </summary>
            app.MapDelete("/Categories/{id}", async (long id, ICategoryService categoryService) =>
            {
                var result = await categoryService.DeleteCategory(id);
                if (result == null)
                {
                    return Results.NotFound($"Aucune catégorie trouvée pour cet ID {id}.");
                }
                return Results.Ok(result);
            }).RequireAuthorization();
        }
    }
}



            

