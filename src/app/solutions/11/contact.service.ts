import {Injectable} from '@angular/core';
import {Contact} from './contact';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

const URL = 'http://localhost:3000/contacts';

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) {
  }

  getContact(id: string): Promise<Contact> {
    return this.http.get(`${URL}/${id}`).toPromise();
  }

  getContacts(filter: string): Promise<Contact[]> {
    return this.http.get(`${URL}?q=${filter}`).toPromise();
  }

  save(contact: Contact) {
    // TODO: implement method
    // ex-start
    return contact.id
      ? this.http.put(`${URL}/${contact.id}`, contact).toPromise()
      : this.http.post(`${URL}`, contact).toPromise();
    // ex-end
  }

  remove(id: string) {
    // TODO: implement method
    // ex-start
    return this.http.delete(`${URL}/${id}`).toPromise();
    // ex-end
  }
}
