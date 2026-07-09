namespace backend.DTO
{
    public class returcategoryDTO
    {
        public long IdCategory { get; set; }
        public string Nom { get; set; } = null!;
        public string? Description { get; set; }

    }



    public class categorycreateDTO
    {
        public string Nom { get; set; } = null!;
        public string? Description { get; set; }
    }

    public static class CategoryMappingExtensions
    {
        public static returcategoryDTO ToDTO(this Models.Category category)
        {
            return new returcategoryDTO
            {
                IdCategory = category.Id,
                Nom = category.Nom,
                Description = category.Description
            };
        }
    }
}
