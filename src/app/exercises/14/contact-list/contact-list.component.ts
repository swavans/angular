import {Component, Output, EventEmitter, Input, OnChanges} from '@angular/core';
import {EditItem} from '../edit-item';
import {Contact} from '../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styles: [`
    .row {
      margin-top: 1rem;
    }
  `]
})
export class ContactListComponent implements OnChanges {

  editItemContacts: EditItem<Contact>[];

  @Input() contacts: Contact[];
  @Output() remove = new EventEmitter<number>();

  ngOnChanges() {
    this.editItemContacts = this.contacts.map(contact => new EditItem(contact));
  }

  onRemove(contact: Contact) {
    this.remove.emit(contact.id);
  }

  onSave(editItem: EditItem<Contact>, updatedContact: Contact) {
    editItem.item = updatedContact;
    editItem.editing = false;
  }

  onCancel(editItem: EditItem<Contact>) {
    editItem.editing = false;
  }
}
