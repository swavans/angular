import {OnInit, Output, EventEmitter, Directive, ElementRef} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

@Directive({
  selector: 'input[appContactFilter]'
})
export class ContactFilterDirective implements OnInit {

  @Output()
  text = new EventEmitter<string>();

  constructor(private el: ElementRef) {}

  ngOnInit() {
    Observable.fromEvent(this.el.nativeElement, 'input', $event => $event.target.value)
      .filter(text => text === '' || text.length > 1)
      .debounceTime(200)
      .distinctUntilChanged()
      .subscribe(text => this.text.next(text));
  }
}
