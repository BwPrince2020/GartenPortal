import { Component, Input } from '@angular/core';
import { SectionTitleComponent } from '../../../../shared/ui/section-title/section-title.component';
import { HomeBenefit } from '../../models/home-page-data.model';

@Component({
  selector: 'app-benefits-section',
  imports: [SectionTitleComponent],
  templateUrl: './benefits-section.component.html',
  styleUrl: './benefits-section.component.scss',
})
export class BenefitsSectionComponent {
  @Input({ required: true }) benefits: HomeBenefit[] = [];
}
