import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {Contact} from '../contact';
import {ContactService} from '../contact.service';
// ex-start
import {Injectable} from '@angular/core';
// ex-end

// TODO: finish implementing the resolver

// ex-start
@Injectable()
export class ContactResolver implements Resolve<Contact> {

  constructor(private contactService: ContactService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.params['id'];
    return id ? this.contactService.getContact(id) : null;
  }
}
// ex-end
