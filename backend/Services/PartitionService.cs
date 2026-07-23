using backend.Models;
using backend.DTO;
using Microsoft.EntityFrameworkCore;
namespace backend.Services
{
    public class PartitionService(PostgresContext context, IHttpContextAccessor httpContextAccessor) : IPartitionService
    {
        private readonly PostgresContext _context = context;


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
            if (userId == null)
            {
                throw new UnauthorizedAccessException("Utilisateur non connceté ou token non valide");
            }

            var partitions = await _context.Partitions
                .Where(p => p.UserId == userId && p.IsDeleted != true)
                .ToListAsync();
            return partitions.Select(p => p.ToDTO()).ToList();
        }


        //On récupère une Partitions par ID
        public async Task<returnpartitionDTO?> GetPartitionsByID(long id)
        {
            var partitions = await _context.Partitions.FindAsync(id);

            if (partitions == null || partitions.IsDeleted == true)
                return null;

            return partitions.ToDTO();
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
                CheminFichier = cheminComplet,
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
        public async Task<returnpartitionDTO?> UpdatePartition(long id, returnpartitionDTO partDto, IFormFile? nouveauFichier)
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
                if (nouveauFichier.Length > tailleMaxOctets) throw new ArgumentException($"Votre fichier est trop volumineux. La taille autorisé est de {tailleMaxOctets} mo");

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

            if (partition.UserId != userId.Value) throw new UnauthorizedAccessException("Vous n'etes pas authorisé a modifieer cette partition !");

            partition.IsDeleted = true;
            await _context.SaveChangesAsync();
            return partition.ToDTO();
        }


        //Récupération du fichier de la partition
        public async Task<(byte[] Octets, string ContentType, string NomFichier)?> GetPartitionFile(long id)
        {
            // On cherche la partition
            var partition = await _context.Partitions.FindAsync(id);
            if (partition == null || partition.IsDeleted == true) return null;

            if (!System.IO.File.Exists(partition.CheminFichier))
            {
                throw new FileNotFoundException("Le fichier est introuvable sur le serveur.");
            }
            var octets = await System.IO.File.ReadAllBytesAsync(partition.CheminFichier);

            string contentType = "application/pdf";
            string nomFichier = Path.GetFileName(partition.CheminFichier);

            return (octets, contentType, nomFichier);
        }


        //Retourne toutes les partitions par catégorie
        public async Task<List<returnpartitionDTO>> GetPartitionsByCategory(string category)
        {
            var partitions = await _context.Partitions
                .Include(p => p.Category)
                .Where(p => p.Category.Nom == category
                    && p.IsDeleted == false
                    && p.Category != null
                    && p.Category.Nom.ToLower() == category.ToLower()
                    )
                .ToListAsync();

            return partitions.Select(p => p.ToDTO()).ToList();
        }

    }
}
