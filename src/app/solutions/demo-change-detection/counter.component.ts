import {Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <!-- ex-start -->
    <span *ngIf="!hidden">{{ counter }}</span>
    <button class="btn btn-outline-primary btn-sm" (click)="hidden = !hidden">Show counter</button>
    <!-- ex-end -->
  `
})

export class CounterComponent {

  private _counter = 0;

  // ex-start
  hidden = true;

  get counter() {
    return this._counter++;
  }
  // ex-end
}
