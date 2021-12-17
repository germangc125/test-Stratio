import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {
  @Input () item: Item;
  @Input () index: number;
  @Output() selectItemEvent = new EventEmitter<Item>();
  numberPosition: string;
  constructor() { }

  ngOnInit(): void {
  }

  selectItem(item :Item){
    this.selectItemEvent.emit(item);
  }

  getNumber(index: number){
    this.numberPosition =  index + ".";
    return this.numberPosition;
  }
}
