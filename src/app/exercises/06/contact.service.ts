import {Contact} from './contact';
import {CONTACTS} from './contacts';

// TODO: finish implementing the service and make it available for injection
export class ContactService {

  private contacts: Contact[] = Array.from(CONTACTS);

  getContacts() {
    return this.contacts;
  }

  save(contact: Contact) {
  }

  remove(id: number) {
  }
}
