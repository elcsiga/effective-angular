import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from "../../common-types";
import {NumberService} from "../../services/number.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private numberService: NumberService) { }

  @Input()
  item: Item;

  @Output()
  toggle = new EventEmitter<number>();

  ngOnInit() {
  }

  getFactorization(): string {
    console.log(this.item.num);
    return this.numberService.factorize(this.item.num).join('*') || 'PRIM';
  }

}
