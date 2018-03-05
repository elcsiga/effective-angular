import { Injectable } from '@angular/core';

@Injectable()
export class NumberService {

  constructor() { }

  // lame integer factorization
  factorize( n: number ): number[] {
    const prims = [];
    for (let i = 2; i<n; i++) {
      if (Number.isInteger(n / i)) {
        prims.push(i);
      }
    }
    console.log(prims);
    return prims;
  }

}
