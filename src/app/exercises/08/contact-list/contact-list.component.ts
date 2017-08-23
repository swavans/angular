import {Component, Output, EventEmitter} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent {

  // TODO: use the properties below to do pagination
  page: number;
  pageSize: number;

  term = '';

  @Output() edit = new EventEmitter<Contact>();

  constructor(private contactService: ContactService) {
  }

  get contacts() {
    return this.contactService.getContacts(this.term);
  }

  onEdit(contact: Contact) {
    this.edit.emit(Object.assign({}, contact));
  }

  onRemove(contact: Contact) {
    this.contactService.remove(contact.id);
  }
}
