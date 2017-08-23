import {Component, Input, OnChanges, ChangeDetectionStrategy, DoCheck, ChangeDetectorRef, OnInit} from '@angular/core';
import {AgeService} from './age.service';

@Component({
  selector: 'app-contact',
  template: `
    <p>
      My name is {{ contact.name }}, I was born in {{ contact.birthYear }}<br>
      <!-- ex-start -->
      I'm {{ age }} years old
      <button class="btn btn-sm btn-outline-primary" (click)="noop">test</button>
      <!-- ex-end -->
    </p>
  `
  // ex-start
  ,
  changeDetection: ChangeDetectionStrategy.OnPush
  // ex-end
})
export class ContactComponent implements OnInit, OnChanges, DoCheck {

  @Input()
  contact: {name, birthYear};

  // TODO: add 'age' as internal state
  // ex-start
  age;

  noop = () => {};

  constructor(private ageService: AgeService,
              private changeDetector: ChangeDetectorRef) {}

  // ex-end
  ngOnInit() {
    // ex-start
    console.log('on init');
    // ex-end
  }

  ngDoCheck() {
    // ex-start
    console.log('do check');
    this.changeDetector.markForCheck();
    if (this.contact) {
      this.age = this.ageService.getAge(this.contact.birthYear);
    }
    // ex-end
  }

  ngOnChanges(changes) {
    // ex-start
    console.log('on changes');
    if (changes.contact) {
      this.age = this.ageService.getAge(this.contact.birthYear);
    }
    // ex-end
  }
}
