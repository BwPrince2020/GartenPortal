import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../../../shared/ui/button/button.component';

interface NavigationLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-main-layout',
  imports: [CommonModule, RouterOutlet, ButtonComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  protected readonly menuOpen = signal(false);
  protected readonly currentYear = new Date().getFullYear();
  protected readonly links: NavigationLink[] = [
    { label: 'Warum wir?', href: '#warum' },
    { label: 'Freie Gärten', href: '#gaerten' },
    { label: 'Team', href: '#team' },
    { label: 'Galerie', href: '#galerie' },
    { label: 'Standort', href: '#standort' },
  ];

  protected toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
