// tslint:disable:prefer-const
import {Component, Output, EventEmitter} from '@angular/core';
import {Contact} from '../contact';
// ex-start
import {ContactService} from '../contact.service';
// ex-end

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent {

  @Output() edit = new EventEmitter<Contact>();

  // TODO: inject and use ContactService
  // ex-start
  constructor(private contactService: ContactService) {}
  // ex-end

  // TODO: implement 'get contacts' accessor
  get contacts() {
    let contacts = [];
    // ex-start
    contacts = this.contactService.getContacts();
    // ex-end
    return contacts;
  }

  onEdit(contact: Contact) {
    this.edit.emit(Object.assign({}, contact));
  }

  onRemove(contact: Contact) {
    // TODO: finish implementing method
    // ex-start
    this.contactService.remove(contact.id);
    // ex-end
  }
}
