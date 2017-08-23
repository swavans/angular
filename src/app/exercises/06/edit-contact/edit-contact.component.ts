import {Component, OnInit, Input} from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html'
})
export class EditContactComponent implements OnInit {

  @Input() contact: Contact;

  // TODO: inject and use ContactService

  ngOnInit() {
    if (!this.contact) {
      this.clear();
    }
  }

  save() {
    if (this.isValid()) {
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
