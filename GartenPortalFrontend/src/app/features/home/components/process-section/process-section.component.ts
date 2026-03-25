import { Component, Input } from '@angular/core';
import { SectionTitleComponent } from '../../../../shared/ui/section-title/section-title.component';
import { HomeStep } from '../../models/home-page-data.model';

@Component({
  selector: 'app-process-section',
  imports: [SectionTitleComponent],
  templateUrl: './process-section.component.html',
  styleUrl: './process-section.component.scss',
})
export class ProcessSectionComponent {
  @Input({ required: true }) steps: HomeStep[] = [];
}
