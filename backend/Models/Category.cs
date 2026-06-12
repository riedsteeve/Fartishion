using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Category
{
    public long Id { get; set; }

    public DateTime CreatedAt { get; set; }

    public string Nom { get; set; } = null!;

    public string? Description { get; set; }

    public virtual Partition IdNavigation { get; set; } = null!;
}
