import {Component, Input} from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html'
})
export class ContactCardComponent {

  @Input()
  contact: Contact = {
    firstName: '',
    lastName: ''
  };
}
