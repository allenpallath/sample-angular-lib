import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'lib-elements',
  imports: [],
  template: `
    @if(item.id == 1){
    <p>{{ item.name }}</p>
    }@else if (item.id == 2) {
    <input [placeholder]="item.name" />
    }@else if (item.id == 3) {
    <h1>{{ item.name }}</h1>
    }
    <!-- @if(formType === 2){
      <span><button (click)="removeItem(item)">remove</button></span>
    } -->
  `,
  styleUrl: './elements.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElementsComponent {
  @Input() item: any;
  @Input() formType: number | string = 1;
  @Output() itemToDel = new EventEmitter<any>();

  removeItem(item: any) {
    this.itemToDel.emit(item);
  }


}
