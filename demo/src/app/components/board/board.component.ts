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
    for (let i = 0; i < 4000; i++) {
      this.items.push({
        num: i,
        id: i
      })
    }
  }

  toggle(id: number) {
    this.items[id].num ++;
  }
}
