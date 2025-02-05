import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-basic-lib',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Select Form Type</h1>
  `,
  styles: ``,
})
export class BasicLibComponent {
  @Input() value: string = 'value';

  constructor() {

  }
}
