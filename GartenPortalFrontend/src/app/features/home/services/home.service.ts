import { Injectable } from '@angular/core';
import { HomePageData } from '../models/home-page-data.model';

@Injectable({ providedIn: 'root' })
export class HomeService {
  getPageData(): HomePageData {
    return {
      benefits: [
        {
          icon: 'Natur',
          title: 'Natur & Erholung',
          text: 'Genieße Ruhe, Natur und deinen eigenen Rückzugsort.',
        },
        {
          icon: 'Gemeinschaft',
          title: 'Gemeinschaft',
          text: 'Werde Teil einer freundlichen und hilfsbereiten Gemeinschaft.',
        },
        {
          icon: 'Infrastruktur',
          title: 'Infrastruktur',
          text: 'Gepflegte Anlagen, Wasseranschlüsse und alles was du brauchst.',
        },
      ],
      gardens: [
        {
          id: 12,
          name: 'Parzelle 12',
          size: '450 m²',
          price: 'ab 1.200 €',
          imageUrl: 'assets/home/garden-plot1.jpg',
        },
        {
          id: 27,
          name: 'Parzelle 27',
          size: '380 m²',
          price: 'ab 950 €',
          imageUrl: 'assets/home/garden-plot2.jpg',
        },
        {
          id: 34,
          name: 'Parzelle 34',
          size: '520 m²',
          price: 'ab 1.450 €',
          imageUrl: 'assets/home/garden-plot3.jpg',
        },
      ],
      contacts: [
        {
          name: 'Hans Müller',
          role: '1. Vorsitzender',
          email: 'h.mueller@gartenverein.de',
          phone: '0171 1234567',
        },
        {
          name: 'Petra Schmidt',
          role: 'Schriftführerin',
          email: 'p.schmidt@gartenverein.de',
          phone: '0172 2345678',
        },
        {
          name: 'Klaus Weber',
          role: 'Kassenwart',
          email: 'k.weber@gartenverein.de',
          phone: '0173 3456789',
        },
      ],
      steps: [
        {
          number: '1',
          title: 'Garten auswählen',
          text: 'Finde einen Garten, der zu dir passt.',
        },
        {
          number: '2',
          title: 'Bewerben',
          text: 'Fülle das Formular in wenigen Minuten aus.',
        },
        {
          number: '3',
          title: 'Rückmeldung',
          text: 'Wir melden uns zeitnah bei dir.',
        },
      ],
      gallery: [
        {
          src: 'assets/home/gallery1.jpg',
          alt: 'Gemeinschaftliches Gartenfest',
        },
        {
          src: 'assets/home/gallery2.jpg',
          alt: 'Pflanzarbeiten im Garten',
        },
        {
          src: 'assets/home/gallery3.jpg',
          alt: 'Herbsternte mit Kürbissen',
        },
        {
          src: 'assets/home/gallery4.jpg',
          alt: 'Kinder im Garten',
        },
      ],
    };
  }
}
