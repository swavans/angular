import {Component, Output, EventEmitter, Input, Inject} from '@angular/core';
import {Contact} from '../contact';
import {RestoreService} from '../restore.service';
// ex-start
import {RestoreServiceImpl} from '../restore.service.impl';
import {RESTORE_SERVICE} from '../restore.service.token';
// ex-end

@Component({
  selector: 'app-contact-editor',
  templateUrl: './contact-editor.component.html'
  // ex-start
  ,
  providers: [
    {provide: RESTORE_SERVICE, useClass: RestoreServiceImpl}
  ]
  // ex-end
})
export class ContactEditorComponent {

  @Output() save = new EventEmitter<Contact>();
  @Output() cancel = new EventEmitter<Contact>();

  // TODO: inject a proper implementation of the service instead of this dummy one
  private restoreService: RestoreService<Contact> = {
    item: null,
    restore: () => null
  };

  // ex-start
  constructor(@Inject(RESTORE_SERVICE) restoreService: RestoreService<Contact>) {
    this.restoreService = restoreService;
  }

  // ex-end

  @Input()
  set contact(contact: Contact) {
    this.restoreService.item = contact;
  }

  get contact() {
    return this.restoreService.item;
  }

  onSave() {
    if (this.isValid()) {
      this.save.emit(this.restoreService.item);
    }
  }

  onCancel() {
    this.contact = this.restoreService.item;
    this.cancel.emit(this.contact);
  }

  isValid() {
    return this.contact.firstName && this.contact.lastName;
  }
}
