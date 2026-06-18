using backend.Models;
using backend.DTO;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System.Security.Authentication;
namespace backend.Services
{
    public class PartitionService(PostgresContext context, IHttpContextAccessor httpContextAccessor)
    {
        private readonly PostgresContext _context = context;
        private readonly IHttpContextAccessor httpContextAccessor;



        //On récupère tout les Partitions non supprimés
        public async Task<List<returnpartitionDTO>> GetAllPartitions()
        {
            var partitions = await _context.Partitions
                .Where(p => p.IsDeleted != true)
                .ToListAsync();
            return partitions.Select(p => p.ToDTO()).ToList();
        }

        //Récupère toute les partition de l'utilisateur connecté
        public async Task<List<returnpartitionDTO>> GetPartittionsByConnectedUser()
        {
            //on récupère le HTTPCONTEXT actuel
            var httpContext = httpContextAccessor.HttpContext;
            if (httpContext == null)
            {
                throw new InvalidOperationException("Le context HTTP n'est pas disponible");
            }

            long? userId = AuthServiceUserConnectedUserVerify.GetConnectedUserId(httpContext);
            if(userId == null)
            {
                throw new UnauthorizedAccessException("Utilisateur non connceté ou token non valide");
            }

            var partitions = await _context.Partitions
                .Where(p => p.UserId == userId && p.IsDeleted != true)
                .ToListAsync();
            return partitions.Select(p => p.ToDTO()).ToList();
        }

        //Creer une partition
        public async Task<returnpartitionDTO> CreateNewPartion(partitionCreateDTO partDto, IFormFile fichier)
        {
            //On fix un limit pour la taille du fichier
            long tailleMaxOctets = 10 * 1024 * 1024;
            //on vériefier si l'utilisateur est connecté
            var httpContext = httpContextAccessor.HttpContext;
            if (httpContext == null) throw new InvalidOperationException("Contexte HTTP indisponible.");

            long? userId = AuthServiceUserConnectedUserVerify.GetConnectedUserId(httpContext);
            if (userId == null) throw new UnauthorizedAccessException("Utilisateur non connecté.");

            if (fichier == null || fichier.Length == 0) throw new ArgumentException("Le fichier entré n'est pas valide ou moquant !");

            if (fichier.Length > tailleMaxOctets) throw new ArgumentException($"Votre fichier est trop volumineux. La taille autorisé est de {tailleMaxOctets} mo");

            var DossierdeStockage = @"C:\MesdossierDePartition\PartitionUtilisateur\";

            var uniquenomFichier = $"{Guid.NewGuid()}_{Path.GetFileName(fichier.FileName)}";
            var cheminComplet = Path.Combine(DossierdeStockage, uniquenomFichier);

            if (!Directory.Exists(DossierdeStockage))
                Directory.CreateDirectory(DossierdeStockage);

            using (var stream = new FileStream(cheminComplet, FileMode.Create))
            {
                await fichier.CopyToAsync(stream);
            }

            var nouvellePartition = new Partition
            {
                Nom = partDto.Nom,
                Auteur = partDto.Auteur,
                Description = partDto.Description,
                CheminFichier = partDto.CheminFichier,
                UserId = userId.Value,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow,
                IsDeleted = false
            };

            _context.Partitions.Add(nouvellePartition);
            await _context.SaveChangesAsync();

            return nouvellePartition.ToDTO();
        }


        //Mise ajour
        public async Task<returnpartitionDTO?> UpdatePartition (long id, returnpartitionDTO partDto, IFormFile? nouveauFichier)
        {
            var httpContext = httpContextAccessor.HttpContext;
            if (httpContext == null) throw new InvalidOperationException("Contexte HTTP indisponible.");

            long? userId = AuthServiceUserConnectedUserVerify.GetConnectedUserId(httpContext);
            if (userId == null) throw new UnauthorizedAccessException("Utilisateur non connecté.");

            var existingParttion = await _context.Partitions.FindAsync(id);
            if (existingParttion == null || existingParttion.IsDeleted == true)
                return null;

            if (existingParttion.UserId != userId.Value) throw new UnauthorizedAccessException("Vous n'etes pas authorisé a modifieer cette partition !");


            existingParttion.Nom = partDto.Nom;
            existingParttion.Auteur = partDto.Auteur;
            existingParttion.Description = partDto.Description;
            existingParttion.UpdatedAt = DateTime.UtcNow;

            long tailleMaxOctets = 10 * 1024 * 1024;

            //Modification du fichir
            if (nouveauFichier != null && nouveauFichier.Length > 0)
            {
                if(nouveauFichier.Length > tailleMaxOctets) throw new ArgumentException($"Votre fichier est trop volumineux. La taille autorisé est de {tailleMaxOctets} mo");

                if (System.IO.File.Exists(existingParttion.CheminFichier))
                    System.IO.File.Delete(existingParttion.CheminFichier);

                var DossierdeStockage = @"C:\MesdossierDePartition\PartitionUtilisateur\";
                var uniquenomFichier = $"{Guid.NewGuid()}_{Path.GetFileName(nouveauFichier.FileName)}";
                var nouveauChemin = Path.Combine(DossierdeStockage, uniquenomFichier);

                using (var stream = new FileStream(nouveauChemin, FileMode.Create))
                {
                    await nouveauFichier.CopyToAsync(stream);
                }

                existingParttion.CheminFichier = nouveauChemin;
            }

            await _context.SaveChangesAsync();
            return existingParttion.ToDTO();

        }

        //Supression
        public async Task<returnpartitionDTO?> DeletePartition(long id)
        {

            var httpContext = httpContextAccessor.HttpContext;
            if (httpContext == null) throw new InvalidOperationException("Contexte HTTP indisponible.");

            long? userId = AuthServiceUserConnectedUserVerify.GetConnectedUserId(httpContext);
            if (userId == null) throw new UnauthorizedAccessException("Utilisateur non connecté.");

            var partition = await _context.Partitions.FindAsync(id);
            if (partition == null || partition.IsDeleted == true)
                return null;

            if(partition.UserId != userId.Value) throw new UnauthorizedAccessException("Vous n'etes pas authorisé a modifieer cette partition !");

            partition.IsDeleted = true;
            await _context.SaveChangesAsync();
            return partition.ToDTO();
        }
    }
}
