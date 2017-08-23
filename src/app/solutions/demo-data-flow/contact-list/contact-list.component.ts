import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent {

  @Input() contacts: Contact[];
  @Input() page: number;
  @Input() pageSize: number;

  @Output() edit = new EventEmitter<Contact>();
  @Output() remove = new EventEmitter<Contact>();

  trackBy = (_, c) => c.id;
}
