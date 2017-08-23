import {Component} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent {

  page = 1;
  pageSize = 5;
  term = '';

  constructor(private contactService: ContactService) {
  }

  get contacts() {
    return this.contactService.getContacts(this.term);
  }

  onRemove(contact: Contact) {
    this.contactService.remove(contact.id);
  }
}
