import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ReplaySubject} from 'rxjs/ReplaySubject';

import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/zip';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/publish';
import 'rxjs/add/operator/bufferWhen';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/map';

@Component({
  styles: [`
    button {
      width: 9rem;
      margin-right: 1rem
    }
  `],
  template: `
    <h3>Observables</h3>
    <br>
    <p>
      <button class="btn btn-primary" (click)="simpleObservable()">Simple</button>
      A simple observable that completes
    </p>
    <p>
      <button class="btn btn-primary" (click)="cancelObservable()">Cancelable</button>
      An observable that cancels after 1s
    </p>
    <p>
      <button class="btn btn-primary" (click)="subjects()">Subjects</button>
      Different kinds of Subjects
    </p>
    <p>
      <button class="btn btn-primary" (click)="operators()">Operators</button>
      Some operators with observable streams
    </p>
    <p>
      <button class="btn btn-primary">Multiple clicks</button>
      Filtering out multiple clicks
    </p>
  `
})
export class AppComponent implements OnInit {


  ngOnInit() {
    // TODO: filter out single clicks with bufferWhen, debounceTime, map and filter
  }

  simpleObservable() {
    // TODO: create a simple observable and subscribe to it
  }

  cancelObservable() {
    // an observable with subscription
    const observable$ = new Observable(observer => {

      let counter = 0;
      const interval = setInterval(() => observer.next(counter++), 200);

    });

    // TODO: show interval helper
  }

  subjects() {

    const subject = new Subject();
    // TODO: show Behavior and Replay subjects. Hot and Cold

    let counter = 0;
    setInterval(() => subject.next(counter++), 200);

    setTimeout(() => {
      subject.subscribe(
        value => console.log(value),
        err => console.error(err),
        () => console.log('done')
      );
    }, 1000);
  }

  operators() {

    const o1$ = Observable.interval(100).take(10);
    const o2$ = Observable.interval(150).take(10).map(x => -x);

    // TODO: show concat, zip and merge.takeUntil
  }
}
