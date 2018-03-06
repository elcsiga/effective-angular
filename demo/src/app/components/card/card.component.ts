import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from "../../common-types";
import {NumberService} from "../../services/number.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

  constructor(private numberService: NumberService) { }

  @Input()
  item: Item;

  @Output()
  toggle = new EventEmitter<void>();

  ngOnInit() {
  }

  isPrim(): boolean {
    //return false;
    return this.numberService.factorize(this.item.num).length === 0;
  }

  isSelected(): boolean {
    return this.item.selected;
  }
}
