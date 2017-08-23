import {Injectable} from '@angular/core';
import {Contact} from './contact';
import {CONTACTS} from './contacts';

@Injectable()
export class ContactService {

  private counter = CONTACTS.length + 1;
  private contacts: Contact[] = Array.from(CONTACTS);

  getContacts(term = ''): Contact[] {
    return this.contacts;
  }

  save(contact: Contact) {
    if (contact.id) {
      const index = this.contacts.findIndex(item => item.id === contact.id);
      this.contacts[index] = contact;
    } else {
      contact.id = this.counter++;
      this.contacts.push(contact);
    }
  }

  remove(id: number) {
    this.contacts = this.contacts.filter(index => index.id !== id);
  }
}
