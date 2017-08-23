import {Component} from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html'
})
export class EditContactComponent {

  // TODO: add data model
  contacts: Contact[] = [];
  // ex-start
  contact: Contact;
  // ex-end

  constructor() {
    // TODO: do the initialization if necessary
    // ex-start
    this.clear();
    // ex-end
  }

  save() {
    // TODO: implement method
    // ex-start
    if (this.isValid()) {
      this.contacts.push(Object.assign({}, this.contact));
      this.clear();
    }
    // ex-end
  }

  clear() {
    // TODO: implement method
    // ex-start
    this.contact = {
      firstName: '',
      lastName: ''
    };
    // ex-end
  }

  isValid() {
    // TODO: implement method
    // ex-start
    return this.contact.firstName && this.contact.lastName;
    // ex-end
  }
}
