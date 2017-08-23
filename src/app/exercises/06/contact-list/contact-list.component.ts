// tslint:disable:prefer-const
import {Component, Output, EventEmitter} from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent {

  @Output() edit = new EventEmitter<Contact>();

  // TODO: inject and use ContactService

  // TODO: implement 'get contacts' accessor
  get contacts() {
    let contacts = [];
    return contacts;
  }

  onEdit(contact: Contact) {
    this.edit.emit(Object.assign({}, contact));
  }

  onRemove(contact: Contact) {
    // TODO: finish implementing method
  }
}
