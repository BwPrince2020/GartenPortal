import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() href?: string;
  @Input({ required: true }) label = '';
  @Input() variant: 'primary' | 'secondary' | 'outline' = 'primary';
  @Input() fullWidth = false;
  @Output() buttonClick = new EventEmitter<void>();

  protected handleClick(): void {
    this.buttonClick.emit();
  }
}
