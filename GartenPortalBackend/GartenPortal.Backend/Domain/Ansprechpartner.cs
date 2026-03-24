namespace GartenPortal.Domain;

public class Ansprechpartner
{
    public Guid Id { get; set; }
    public Guid VereinId { get; set; }
    

    public string Name { get; set; } = null!;
    public string Rolle { get; set; } = null!; // Fachberater, Kassierer, etc.

    public string? Email { get; set; }
    public string? Telefon { get; set; }
    public string? BildUrl { get; set; }

    public bool IstSichtbarAufStartseite { get; set; } = true;

    public DateTime CreatedAtUtc { get; set; }
    public DateTime UpdatedAtUtc { get; set; }
    
    public Verein Verein { get; set; } = null!;
}