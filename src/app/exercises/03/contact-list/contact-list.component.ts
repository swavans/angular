import { EditContactComponent } from './../../../solutions/16/components/edit-contact/edit-contact.component';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent {

  @Input() contacts: Contact[];

  @Output() edit = new EventEmitter<Contact>();
  @Output() remove = new EventEmitter<number>();
  @Output() duplicate = new EventEmitter<Contact>();
  @Output() deleteall = new EventEmitter<string>();

  constructor() { }

  onEdit(contact: Contact) {
    this.edit.emit(Object.assign({}, contact));
  }

  onRemove(contact: Contact) {
    this.remove.emit(contact.id);
  }

  onDuplicate(contact: Contact) {
    this.duplicate.emit(contact);
  }

  onDeleteAll(c: Contact) {
    this.deleteall.emit(c.firstName + c.lastName);
  }

}
