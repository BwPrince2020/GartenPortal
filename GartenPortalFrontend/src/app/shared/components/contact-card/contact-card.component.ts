import { Component, Input } from '@angular/core';
import { Ansprechpartner } from '../../../core/models/ansprechpartner.model';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.scss',
})
export class ContactCardComponent {
  @Input({ required: true }) contact!: Ansprechpartner;

  protected get initials(): string {
    return this.contact.name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }
}
