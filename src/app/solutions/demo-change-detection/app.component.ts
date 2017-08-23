import {Component} from '@angular/core';

@Component({
  template: `
    <h4>Expression has changed after it was checked</h4>
    <br>

    <app-counter></app-counter>

    <hr>

    <h4>Change Detection</h4>
    <br>

    Birth year: <input type="text"
                       ex-start
                       [value]="contact.birthYear" (input)="contact.birthYear = +$event.target.value"
                       ex-end>

    <!-- ex-start -->
    <button class="btn btn-sm btn-outline-primary" (click)="contact = otherContact">Replace person</button>
    <!-- ex-end -->
    <br><br>

    <app-contact [contact]="contact"></app-contact>
  `
})
export class AppComponent {

  contact = {
    name: 'Joe',
    birthYear: 1971
  };

  // ex-start
  otherContact = {
    name: 'Mike',
    birthYear: 1906
  };
  // ex-end
}
