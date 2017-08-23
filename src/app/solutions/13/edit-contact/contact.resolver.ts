import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {Contact} from '../contact';
import {ContactService} from '../contact.service';

import {Injectable} from '@angular/core';

@Injectable()
export class ContactResolver implements Resolve<Contact> {

  constructor(private contactService: ContactService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.params['id'];
    return id ? this.contactService.getContact(id) : null;
  }
}
