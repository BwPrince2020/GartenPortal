import { Component, Input } from '@angular/core';
import { Ansprechpartner } from '../../../../core/models/ansprechpartner.model';
import { ContactCardComponent } from '../../../../shared/components/contact-card/contact-card.component';
import { SectionTitleComponent } from '../../../../shared/ui/section-title/section-title.component';

@Component({
  selector: 'app-contact-section',
  imports: [ContactCardComponent, SectionTitleComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {
  @Input({ required: true }) contacts: Ansprechpartner[] = [];
}
