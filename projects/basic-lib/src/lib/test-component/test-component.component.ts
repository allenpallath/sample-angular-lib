import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';

import { BasicLibComponent } from '../basic-lib.component';
import { ElementsComponent } from '../elements/elements.component';

@Component({
  selector: 'lib-test-component',
  imports: [
    CommonModule,
    FormsModule,
    CdkDropList,
    CdkDrag,
    BasicLibComponent,
    ElementsComponent,
  ],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.css',
})
export class TestComponentComponent implements OnChanges {
  @Input() formtype: number = 0;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  onChange() {
    console.log(this.formtype);
  }

  elementList = [
    { name: 'Title Element', id: 1 },
    { name: 'Input Element', id: 2 },
  ];

  formList = [{ name: 'Heading Element', id: 3 }];

  drop(event: CdkDragDrop<{ name: string; id: number }[]>) {
    if (event.previousContainer === event.container) {
      // Allow reordering within `doneList`
      const [movedItem] = event.container.data.splice(event.previousIndex, 1);
      event.container.data.splice(event.currentIndex, 0, movedItem);
    } else {
      // Clone item when dragged from `todoList` to `doneList`
      const clonedItem = JSON.parse(
        JSON.stringify(event.previousContainer.data[event.previousIndex])
      );
      event.container.data.splice(event.currentIndex, 0, clonedItem);
    }
  }

  // Prevent dropping items back into `todoList`
  preventDrop = (drag: any, drop: any) => drop.id !== 'todoList';
}
