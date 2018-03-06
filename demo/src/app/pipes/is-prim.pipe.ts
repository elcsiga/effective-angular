import { Pipe, PipeTransform } from '@angular/core';
import {NumberService} from "../services/number.service";

@Pipe({
  name: 'isPrim',
  pure: true
})
export class IsPrimPipe implements PipeTransform {

  constructor( private numberService: NumberService) {}
  transform(value: number): boolean {
    return this.numberService.factorize(value).length === 0;
  }

}
