import { Component, Input } from '@angular/core';
import { SectionTitleComponent } from '../../../../shared/ui/section-title/section-title.component';
import { HomeGalleryImage } from '../../models/home-page-data.model';

@Component({
  selector: 'app-gallery-section',
  imports: [SectionTitleComponent],
  templateUrl: './gallery-section.component.html',
  styleUrl: './gallery-section.component.scss',
})
export class GallerySectionComponent {
  @Input({ required: true }) images: HomeGalleryImage[] = [];
}
