using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class User
{
    public long Id { get; set; }

    public string Nom { get; set; } = null!;

    public string Prenom { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Mdp { get; set; } = null!;

    public string Rôle { get; set; } = null!;

    public string? Photo { get; set; }

    public DateTime CreatedAt { get; set; }

    public bool? IsDeleted { get; set; }

    public virtual Partition? Partition { get; set; }
}
