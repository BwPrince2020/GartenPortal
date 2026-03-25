import { Component, Input } from '@angular/core';
import { Garten } from '../../../../core/models/garten.model';
import { GardenCardComponent } from '../../../../shared/components/garden-card/garden-card.component';
import { ButtonComponent } from '../../../../shared/ui/button/button.component';
import { SectionTitleComponent } from '../../../../shared/ui/section-title/section-title.component';

@Component({
  selector: 'app-garden-preview-section',
  imports: [GardenCardComponent, ButtonComponent, SectionTitleComponent],
  templateUrl: './garden-preview-section.component.html',
  styleUrl: './garden-preview-section.component.scss',
})
export class GardenPreviewSectionComponent {
  @Input({ required: true }) gardens: Garten[] = [];
}
