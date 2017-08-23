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

  onEdit(contact: Contact) {
    this.edit.emit(Object.assign({}, contact));
  }

  onRemove(contact: Contact) {
    this.remove.emit(contact.id);
  }

}
