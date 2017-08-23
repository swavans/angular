import {Component} from '@angular/core';
import {Contact} from './contact';

@Component({
  templateUrl: 'app.component.html',
})
export class AppComponent {
  contact: Contact = {
    firstName: 'Mickey',
    lastName: 'Mouse'
  };
}
