import {Component} from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html'
})
export class EditContactComponent {

  // TODO: add data model
  contacts: Contact[] = [];

  constructor() {
    // TODO: do the initialization if necessary
  }

  save() {
    // TODO: implement method
  }

  clear() {
    // TODO: implement method
  }

  isValid() {
    // TODO: implement method
  }
}
