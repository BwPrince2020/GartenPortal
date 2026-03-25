import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-text',
  template: `
    <div class="icon-text">
      <strong>{{ icon }}</strong>
      <span>{{ text }}</span>
    </div>
  `,
  styles: `
    .icon-text{display:inline-flex;align-items:center;gap:.5rem}
    strong{font-family:'Quicksand',sans-serif}
  `,
})
export class IconTextComponent {
  @Input() icon = '';
  @Input() text = '';
}
