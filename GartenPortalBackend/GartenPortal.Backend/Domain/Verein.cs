namespace GartenPortal.Domain;

public class Verein
{
    public Guid Id { get; set; }

    public string Name { get; set; } = null!;
    public string Slug { get; set; } = null!; // z.B. "gartenfreunde-hohnsen"

    public string? HeroTitle { get; set; }
    public string? HeroSubtitle { get; set; }

    public string? Kurzbeschreibung { get; set; }

    public string? LogoUrl { get; set; }
    public string? PrimaryColor { get; set; }
    public string? SecondaryColor { get; set; }
    
    public string? Strasse { get; set; }
    public string? Hausnummer { get; set; }
    public string? Postleitzahl { get; set; }
    public string? Ort { get; set; }

    public string? Email { get; set; }
    public string? Telefon { get; set; }

    public DateTime CreatedAtUtc { get; set; }
    public DateTime UpdatedAtUtc { get; set; }
    
    public ICollection<Garten> Gaerten { get; set; } = new List<Garten>();
    public ICollection<Ansprechpartner> Ansprechpartner { get; set; } = new List<Ansprechpartner>();
}