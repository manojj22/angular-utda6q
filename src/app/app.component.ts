import { Component, ViewChild, ElementRef } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

export interface IBox {
  selected?: boolean;
  ships?: number;
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public board: Array<Array<IBox>> = [
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
  ];
  constructor() {}
  @ViewChild('cdkBoard', { read: ElementRef, static: false }) boardElement;
  public index: number = -1;
  public ships = [
    {
      name: 'Submarin',
      size: 1,
      image:
        'https://bucketmediaelitefishingstaging.s3.eu-west-2.amazonaws.com/haaggle/products/1660973538.2022082009321852926.jpg',
    },
    {
      name: 'frigate',
      size: 2,
      image:
        'https://bucketmediaelitefishingstaging.s3.eu-west-2.amazonaws.com/haaggle/products/1660973538.2022082009321852926.jpg',
    },
    {
      name: 'destroyer',
      size: 3,
      image:
        'https://bucketmediaelitefishingstaging.s3.eu-west-2.amazonaws.com/haaggle/products/1660973538.2022082009321852926.jpg',
    },
    {
      name: 'cruiser',
      size: 4,
      image:
        'https://bucketmediaelitefishingstaging.s3.eu-west-2.amazonaws.com/haaggle/products/1660973538.2022082009321852926.jpg',
    },
  ];
  public imagediv = false;
  public worddiv = true;
  public shipsInBoard: any[] = [];
  position: any;
  drop(event: CdkDragDrop<string[]>) {
    event.previousContainer.data[event.previousIndex].top = this.position
      ? this.position.y -
        this.boardElement.nativeElement.getBoundingClientRect().y
      : 0;
    event.previousContainer.data[event.previousIndex].left = this.position
      ? this.position.x -
        this.boardElement.nativeElement.getBoundingClientRect().x
      : 0;
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  showimage() {
    this.worddiv = false;
    this.imagediv = true;
  }
}
