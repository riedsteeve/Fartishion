using backend.DTO;

namespace backend.Services
{
    public interface IPartitionService
    {
        Task<returnpartitionDTO> CreateNewPartion(partitionCreateDTO partDto, IFormFile fichier);
        Task<returnpartitionDTO?> DeletePartition(long id);
        Task<(byte[] Octets, string ContentType, string NomFichier)?> GetPartitionFile(long id);
        Task<List<returnpartitionDTO>> GetPartitionsByCategory(string category);
        Task<returnpartitionDTO?> GetPartitionsByID(long id);
        Task<List<returnpartitionDTO>> GetPartittionsByConnectedUser();
        Task<returnpartitionDTO?> UpdatePartition(long id, returnpartitionDTO partDto, IFormFile? nouveauFichier);
    }
}