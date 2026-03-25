import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  template: `
    <div class="section-title" [class.section-title-left]="align === 'left'">
      <h2>{{ title }}</h2>
      @if (subtitle) {
        <p>{{ subtitle }}</p>
      }
    </div>
  `,
  styles: `
    .section-title {
      display: grid;
      gap: 1rem;
      margin-bottom: 3rem;
      text-align: center;
    }
    .section-title h2 {
      font-size: clamp(2rem, 4vw, 2.7rem);
      font-weight: 800;
    }
    .section-title p {
      max-width: 42rem;
      margin-inline: auto;
      color: hsl(var(--muted-foreground));
      font-size: 1.05rem;
      line-height: 1.7;
    }
    .section-title-left {
      text-align: left;
    }
    .section-title-left p {
      margin-inline: 0;
    }
  `,
})
export class SectionTitleComponent {
  @Input({ required: true }) title!: string;
  @Input() subtitle = '';
  @Input() align: 'left' | 'center' = 'center';
}
