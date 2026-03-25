import { Component, inject } from '@angular/core';
import { BenefitsSectionComponent } from '../../components/benefits-section/benefits-section.component';
import { ContactSectionComponent } from '../../components/contact-section/contact-section.component';
import { CtaSectionComponent } from '../../components/cta-section/cta-section.component';
import { GallerySectionComponent } from '../../components/gallery-section/gallery-section.component';
import { GardenPreviewSectionComponent } from '../../components/garden-preview-section/garden-preview-section.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { LocationSectionComponent } from '../../components/location-section/location-section.component';
import { ProcessSectionComponent } from '../../components/process-section/process-section.component';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-page',
  imports: [
    HeroSectionComponent,
    BenefitsSectionComponent,
    GardenPreviewSectionComponent,
    ProcessSectionComponent,
    ContactSectionComponent,
    GallerySectionComponent,
    LocationSectionComponent,
    CtaSectionComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  private readonly homeService = inject(HomeService);
  protected readonly pageData = this.homeService.getPageData();
}
