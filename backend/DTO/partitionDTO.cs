namespace backend.DTO
{
    public class returnpartitionDTO
    {
        public string Nom { get; set; } = null!;
        public string? Description { get; set; }
        public string Auteur { get; set; } = null!;
    }



    public class partitionCreateDTO
    {
        public string Nom { get; set; } = null!;
        public string? Description { get; set; }
        public string Auteur { get; set; } = null!;
        public long IdCategory { get; set; }

    }

    public static class PartitionMappingExtensions
    {
        public static returnpartitionDTO ToDTO(this Models.Partition partition)
        {
            return new returnpartitionDTO
            {
                Nom = partition.Nom,
                Description = partition.Description,
                Auteur = partition.Auteur
            };
        }
    }
}
