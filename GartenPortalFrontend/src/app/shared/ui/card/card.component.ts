import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  template: '<div class="surface-card"><ng-content /></div>',
  styles: ':host{display:block}',
})
export class CardComponent {}
