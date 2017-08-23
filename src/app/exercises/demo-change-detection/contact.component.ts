import {Component, Input, OnChanges, ChangeDetectionStrategy, DoCheck, ChangeDetectorRef, OnInit} from '@angular/core';
import {AgeService} from './age.service';

@Component({
  selector: 'app-contact',
  template: `
    <p>
      My name is {{ contact.name }}, I was born in {{ contact.birthYear }}<br>
    </p>
  `
})
export class ContactComponent implements OnInit, OnChanges, DoCheck {

  @Input()
  contact: {name, birthYear};

  // TODO: add 'age' as internal state
  ngOnInit() {
  }

  ngDoCheck() {
  }

  ngOnChanges(changes) {
  }
}
