using backend.DTO;
using backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace backend.Endpoints
{
    public static class PartitionEnpoints
    {
        public static void PartitionEndps(this WebApplication app)
        {
            /// <summary>
            /// Récupère toutes les partitions en fonction du User connecté.
            /// </summary>
            app.MapGet("/UserConnPartition", async (IPartitionService partitionService) =>
            {
                var result = await partitionService.GetPartittionsByConnectedUser();
                if (result == null || result.Count == 0)
                {
                    return Results.NotFound("Aucune partition trouvée pour l'utilisateur connecté.");
                }
                return Results.Ok(result);
            }) .RequireAuthorization();


            /// <summary>
            /// Récupère une partition par son ID.
            /// </summary>
            app.MapGet("/Partition/{id}", async (long id, IPartitionService partitionService) =>
            {
                var result = await partitionService.GetPartitionsByID(id);
                if (result == null)
                {
                    return Results.NotFound($"Aucune partition trouvée pour cet ID {id}.");
                }
                return Results.Ok(result);
            });


            /// <summary>
            /// Création d'une nouvelle partition.
            /// </summary>
            app.MapPost("/CreatePartition", async ([FromForm] partitionCreateDTO partDto, IFormFile fichier, IPartitionService partitionService) =>
            {
                var result = await partitionService.CreateNewPartion(partDto, fichier);
                if (result == null)
                {
                    return Results.BadRequest("Erreur lors de la création de la partition.");
                }
                return Results.Ok(result);
            })
                .DisableAntiforgery()
                .RequireAuthorization();

            /// <summary>
            /// Mise à jour d'une partition existante.
            /// </summary>
            app.MapPut("/Partition/{id}", async (long id, [FromForm] returnpartitionDTO partDto, IFormFile? nouveauFichier, IPartitionService partitionService) =>
            {
                var result = await partitionService.UpdatePartition(id, partDto, nouveauFichier);
                if (result == null)
                {
                    return Results.NotFound("Partition non trouvée.");
                }
                return Results.Ok(result);
            })
                .DisableAntiforgery()
                .RequireAuthorization();

            /// <summary>
            /// Suppression d'une partition existante.
            /// </summary>
            app.MapDelete("/Partition/{id}", async (long id, IPartitionService partitionService) =>
            {
                var result = await partitionService.DeletePartition(id);
                if (result == null)
                {
                    return Results.NotFound("Partition non trouvée.");
                }
                return Results.Ok(result);
            }).RequireAuthorization();



            /// <summary>
            /// Téléchargement d'un fichier de partition.
            /// </summary>
            app.MapGet("/Partition/{id}/download", async (long id, IPartitionService partitionService) =>
            {
                try
                {
                    var fileData = await partitionService.GetPartitionFile(id);
                    if (fileData == null) return Results.NotFound("Partition introuvable.");

                    return Results.File(fileData.Value.Octets, fileData.Value.ContentType, fileData.Value.NomFichier);
                }
                catch (FileNotFoundException ex)
                {
                    return Results.NotFound(ex.Message);
                }
            });



            //obtenir toutes les partitions par catégorie
            app.MapGet("/Partition/category", async (string category, IPartitionService partitionService) =>
            {
                var partition = await partitionService.GetPartitionsByCategory(category);
                if (partition == null || partition.Count == 0)
                {
                    return Results.NotFound($"Aucune partition trouvée pour la catégorie '{category}'.");
                }
                else
                {
                    return Results.Ok(partition);
                }
            });
        }
    }
}
