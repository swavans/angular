import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html'
})
export class EditContactComponent implements OnInit {

  // TODO: add missing inputs and outputs
  contact: Contact;

  ngOnInit() {
    if (!this.contact) {
      this.clear();
    }
  }

  onSave() {
    if (this.isValid()) {
      // TODO : handle the contact save
      this.clear();
    }
  }

  clear() {
    this.contact = {
      firstName: '',
      lastName: ''
    };
  }

  isValid() {
    return this.contact.firstName && this.contact.lastName;
  }
}
