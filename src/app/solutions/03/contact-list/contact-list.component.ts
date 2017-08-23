import {Component, Output, EventEmitter, Input} from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent {

  @Input() contacts: Contact[];

  @Output() edit = new EventEmitter<Contact>();
  @Output() remove = new EventEmitter<number>();

  constructor() {}

  onEdit(contact: Contact) {
    // TODO: implement method
    // ex-start
    this.edit.emit(Object.assign({}, contact));
    // ex-end
  }

  onRemove(contact: Contact) {
    this.remove.emit(contact.id);
  }

}
