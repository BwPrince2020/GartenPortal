import { Ansprechpartner } from '../../../core/models/ansprechpartner.model';
import { Garten } from '../../../core/models/garten.model';

export interface HomeBenefit {
  icon: string;
  title: string;
  text: string;
}

export interface HomeStep {
  number: string;
  title: string;
  text: string;
}

export interface HomeGalleryImage {
  src: string;
  alt: string;
}

export interface HomePageData {
  benefits: HomeBenefit[];
  gardens: Garten[];
  contacts: Ansprechpartner[];
  steps: HomeStep[];
  gallery: HomeGalleryImage[];
}
