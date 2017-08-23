import {Injectable} from '@angular/core';
import {Contact} from './contact';

import 'rxjs/add/operator/map';

import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

const URL = 'http://localhost:3000/contacts';

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) {
  }

  getContact(id: string): Observable<Contact> {
    return this.http.get(`${URL}/${id}`);
  }

  getContacts(filter: string): Observable<Contact[]> {
    return this.http.get(`${URL}?q=${filter}`);
  }

  save(contact: Contact): Observable<Contact> {
    return contact.id
      ? this.http.put(`${URL}/${contact.id}`, contact)
      : this.http.post(`${URL}`, contact);
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${URL}/${id}`);
  }
}
