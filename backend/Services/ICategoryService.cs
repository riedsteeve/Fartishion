using backend.DTO;

namespace backend.Services
{
    public interface ICategoryService
    {
        Task<returcategoryDTO> CreateNewCategory(categorycreateDTO category);
        Task<returcategoryDTO?> DeleteCategory(long id);
        Task<List<returcategoryDTO>> GetAllCategories();
        Task<returcategoryDTO?> GetCategoryById(long id);
        Task<returcategoryDTO?> UpdateCategory(long id, categorycreateDTO category);
    }
}