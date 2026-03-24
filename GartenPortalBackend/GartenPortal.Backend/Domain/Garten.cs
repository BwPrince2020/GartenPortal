namespace GartenPortal.Domain;

public class Garten
{
    public Guid Id { get; set; }
    public Guid VereinId { get; set; }

    public string PazellenNummer { get; set; } = null!; // z.B. "Parzelle 12"
    
    public string Bezeichnung { get; set; } = null!;
    public decimal? FlaecheQuadratmeter { get; set; }
    public decimal? Preis { get; set; }
    public string? PreisHinweis { get; set; } // z.B. VB oder anderes
    public string? Beschreibung { get; set; }
    
    public string? TitelbildUrl { get; set; }
    
    public GartenStatus Status { get; set; } // Frei, Reserviert, Vergeben, NichtSichtbar
    
    public bool IstSichtbar { get; set; }
    public DateTime? FreiAbUtc { get; set; }

    public DateTime CreatedAtUtc { get; set; }
    public DateTime UpdatedAtUtc { get; set; }

    public Verein Verein { get; set; } = null!;
}