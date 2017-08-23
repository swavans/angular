import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {Contact} from '../../contact';
import {Injectable} from '@angular/core';
import {ContactService} from '../../contact.service';

@Injectable()
export class EditResolver implements Resolve<Contact> {

  constructor(private service: ContactService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.service.getContact(route.params['id']);
  }

}
