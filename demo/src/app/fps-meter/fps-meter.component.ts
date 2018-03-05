import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fps-meter',
  templateUrl: './fps-meter.component.html',
  styleUrls: ['./fps-meter.component.css']
})
export class FpsMeterComponent implements OnInit {

  last = Date.now();
  fps = 0;

  sum = 0;
  count = 0;

  stack = 20;
  averageFps = 0;

  animate() {
    window.requestAnimationFrame(() => {
      const now = Date.now();

      if (this.count >= this.stack) {
        this.fps = this.sum / this.stack;
        this.count = 0;
        this.sum = 0;
      } else {
        this.sum += 1000 / (now - this.last);
        this.count ++;
      }

      this.last = now;
      this.animate();
    });
  }


  constructor() {

  }

  ngOnInit() {
    this.animate();
  }

}
