using backend.Models;
using backend.DTO;
using Microsoft.EntityFrameworkCore;
namespace backend.Services
{
    public class CategoryService(PostgresContext context, IHttpContextAccessor httpContextAccessor) : ICategoryService
    {
        private readonly PostgresContext _context = context;


        //Récupère toute les catégories
        public async Task<List<returcategoryDTO>> GetAllCategories()
        {
            var categories = await _context.Categories
                .Where(c => c.IsDeleted == false)
                .ToListAsync();
            return categories.Select(c => c.ToDTO()).ToList();
        }


        //Récupère une catégorie par son ID
        public async Task<returcategoryDTO?> GetCategoryById(long id)
        {
            var category = await _context.Categories.FindAsync(id);
            if (category == null || category.IsDeleted == true)
                return null;
            return category.ToDTO();
        }


        //Creer une categorie
        public async Task<returcategoryDTO> CreateNewCategory(categorycreateDTO category)
        {
            var httpContext = httpContextAccessor.HttpContext;
            if (httpContext == null) throw new InvalidOperationException("Contexte HTTP indisponible.");

            long? userId = AuthServiceUserConnectedUserVerify.GetConnectedUserId(httpContext);
            if (userId == null) throw new UnauthorizedAccessException("Utilisateur non connecté.");

            var existingCategory = await _context.Categories.FirstOrDefaultAsync(c => c.Nom == category.Nom);

            if (existingCategory != null) throw new ArgumentException("La catégorie existe déjà ou n'est pas valide.");

            var cate = new Category
            {
                Nom = category.Nom,
                Description = category.Description
            };

            _context.Categories.Add(cate);
            await _context.SaveChangesAsync();

            return cate.ToDTO();
        }



        //Modifier une categorie
        public async Task<returcategoryDTO?> UpdateCategory(long id, categorycreateDTO category)
        {
            var httpContext = httpContextAccessor.HttpContext;
            if (httpContext == null) throw new InvalidOperationException("Contexte HTTP indisponible.");

            long? userId = AuthServiceUserConnectedUserVerify.GetConnectedUserId(httpContext);
            if (userId == null) throw new UnauthorizedAccessException("Utilisateur non connecté.");

            var existingCategory = await _context.Categories.FindAsync(id);
            if (existingCategory == null || existingCategory.IsDeleted == true)
                return null;

            existingCategory.Nom = category.Nom;
            existingCategory.Description = category.Description;
            await _context.SaveChangesAsync();
            return existingCategory.ToDTO();
        }


        //Supprimer une categorie
        public async Task<returcategoryDTO?> DeleteCategory(long id)
        {
            var httpContext = httpContextAccessor.HttpContext;
            if (httpContext == null) throw new InvalidOperationException("Contexte HTTP indisponible.");

            long? userId = AuthServiceUserConnectedUserVerify.GetConnectedUserId(httpContext);
            if (userId == null) throw new UnauthorizedAccessException("Utilisateur non connecté.");

            var category = await _context.Categories.FindAsync(id);
            if (category == null || category.IsDeleted == true)
                return null;
            category.IsDeleted = true;
            await _context.SaveChangesAsync();
            return category.ToDTO();

        }
    }
}


