import {Injectable} from '@angular/core';
import {Contact} from './contact';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishLast';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

const URL = 'http://localhost:3000/contacts';

@Injectable()
export class ContactService {

  private _filter = '';
  private _contacts$ = new BehaviorSubject<Contact[]>([]);

  constructor(private http: HttpClient) {
    this._refresh();
  }

  get contacts$(): Observable<Contact[]> {
    return this._contacts$.asObservable();
  }

  remove(id: string) {
    this.http.delete(`${URL}/${id}`)
      .subscribe(_ => this._refresh(this._filter));
  }

  filter(text: string) {
    this._refresh(text);
  }

  getContact(id: string): Observable<Contact> {
    return this.http.get(`${URL}/${id}`);
  }

  save(contact: Contact) {
    (contact.id
      ? this.http.put(`${URL}/${contact.id}`, contact)
      : this.http.post(`${URL}`, contact))
      .subscribe(_ => this._refresh());
  }

  private _refresh(filter = '') {
    this.http.get(`${URL}?q=${filter}`)
      .subscribe((contacts: Contact[]) => {
        this._filter = filter;
        this._contacts$.next(contacts);
      });
  }
}
