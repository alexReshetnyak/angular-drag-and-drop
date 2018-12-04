import { Component } from '@angular/core';
import { DndDropEvent, DropEffect } from 'ngx-drag-drop';

interface NestableListItem {
  content: string;
  disable?: boolean;
  handle?: boolean;
  customDragImage?: boolean;
  children?: NestableListItem[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  nestableList: NestableListItem[] = [
    {
      content: 'No nested dropping here',
      children: []
    },
    {
      content: 'Got more than one',
      children: [
        {
          content: 'Nested 1',
        },
        {
          content: 'Nested 2'
        },
        {
          content: 'Nested 3'
        },
        {
          content: 'Nested 4',
        },
        {
          content: 'Nested 5'
        },
        {
          content: 'Nested 6'
        }
      ]
    }
  ];

  private currentDraggableEvent: DragEvent;
  private currentDragEffectMsg: string;

  constructor() {}

  onDragStart( event: DragEvent ) {

    this.currentDragEffectMsg = '';
    this.currentDraggableEvent = event;
  }

  onDragged( item: any, list: any[], effect: DropEffect ) {

    this.currentDragEffectMsg = `Drag ended with effect "${effect}"!`;

    if (effect === 'move' ) {
      const index = list.indexOf( item );
      list.splice( index, 1 );
    }
  }

  onDragEnd( event: DragEvent ) {

    this.currentDraggableEvent = event;
  }

  onDrop( event: DndDropEvent, list?: any[] ) {
    if (list
      && (event.dropEffect === 'copy'
        || event.dropEffect === 'move') ) {

      let index = event.index;

      if (typeof index === 'undefined' ) {
        index = list.length;
      }

      list.splice( index, 0, event.data );
    }
  }
}
