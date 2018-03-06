import { Component, OnInit } from '@angular/core';
import { Item } from '../../common-types';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() { }

  items: Item[] = [];

  ngOnInit() {
    for (let i = 2; i < 400; i++) {
      this.items.push({
        num: Math.ceil(Math.random() * 20000),
        selected: false
      })
    }
  }

  toggle(index: number) {
    this.items[index].selected = !this.items[index].selected;

    /*
    this.items[index] = {
      ...this.items[index],
      selected: !this.items[index].selected
    }*/
  }

  invertSelection() {
    this.items.forEach ( (item, index) => {
      this.items[index].selected = !item.selected
    });


    /*this.items.forEach ( (item, index) => (
      this.items[index] = {
        ...item,
        selected: !item.selected
      }
    ));*/
  }
}
