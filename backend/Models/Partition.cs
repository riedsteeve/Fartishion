using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

public partial class Partition
{
    public long Id { get; set; }

    [Column("created_at")]
    public DateTime CreatedAt { get; set; }

    [Column("nom")]
    public string Nom { get; set; } = null!;

    [Column("Description")]  
    public string? Description { get; set; }

    [Column("auteur")]
    public string Auteur { get; set; } = null!;

    [Column("chemin_fichier")]
    public string CheminFichier { get; set; } = null!;

    [Column("updated_at")]
    public DateTime UpdatedAt { get; set; }

    [Column("is_deleted")]
    public bool IsDeleted { get; set; }

     [Column("userid")]
    public long UserId { get; set; }

    [Column("categoryid")]
    public long? CategoryId { get; set; }


    [ForeignKey(nameof(CategoryId))]
    public virtual Category? Category { get; set; }

    [ForeignKey(nameof(UserId))]
    public virtual User IdNavigation { get; set; } = null!;
}