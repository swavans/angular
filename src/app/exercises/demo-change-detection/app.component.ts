import {Component} from '@angular/core';

@Component({
  template: `
    <h4>Expression has changed after it was checked</h4>
    <br>

    <app-counter></app-counter>

    <hr>

    <h4>Change Detection</h4>
    <br>

    Birth year: <input type="text">

    <br><br>

    <app-contact [contact]="contact"></app-contact>
  `
})
export class AppComponent {

  contact = {
    name: 'Joe',
    birthYear: 1971
  };

}
