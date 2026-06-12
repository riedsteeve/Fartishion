using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Partition
{
    public long Id { get; set; }

    public DateTime CreatedAt { get; set; }

    public string Nom { get; set; } = null!;

    public string Auteur { get; set; } = null!;

    public string CheminFichier { get; set; } = null!;

    public DateTime UpdatedAt { get; set; }

    public bool IsDeleted { get; set; }

    public virtual Category? Category { get; set; }

    public virtual User IdNavigation { get; set; } = null!;
}
