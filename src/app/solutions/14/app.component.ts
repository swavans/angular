import {Component} from '@angular/core';
import {CONTACTS} from './contacts';
import {Contact} from './contact';

@Component({
  templateUrl: 'app.component.html',
})
export class AppComponent {

  private counter = CONTACTS.length + 1;

  contact: Contact;
  contacts: Contact[] = Array.from(CONTACTS);

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
    this.contacts = this.contacts.filter(item => item.id !== id);
  }
}
