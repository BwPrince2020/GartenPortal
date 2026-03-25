import { Component, Input } from '@angular/core';
import { Garten } from '../../../core/models/garten.model';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-garden-card',
  imports: [ButtonComponent],
  templateUrl: './garden-card.component.html',
  styleUrl: './garden-card.component.scss',
})
export class GardenCardComponent {
  @Input({ required: true }) garden!: Garten;
}
