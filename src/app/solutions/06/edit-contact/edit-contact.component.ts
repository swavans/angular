import {Component, OnInit, Input} from '@angular/core';
import {Contact} from '../contact';
// ex-start
import {ContactService} from '../contact.service';
// ex-end

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html'
})
export class EditContactComponent implements OnInit {

  @Input() contact: Contact;

  // TODO: inject and use ContactService
  // ex-start
  constructor(private contactService: ContactService) {}
  // ex-end

  ngOnInit() {
    if (!this.contact) {
      this.clear();
    }
  }

  save() {
    if (this.isValid()) {
      // ex-start
      this.contactService.save(Object.assign({}, this.contact));
      // ex-end
      this.clear();
    }
  }

  clear() {
    this.contact = {
      firstName: '',
      lastName: ''
    };
  }

  isValid() {
    return this.contact.firstName && this.contact.lastName;
  }
}
