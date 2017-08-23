import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html'
})
export class EditContactComponent implements OnInit {

  @Input() contact: Contact;

  ngOnInit() {
    if (!this.contact) {
      this.clear();
    }
  }

  save() {
    this.clear();
  }

  clear() {
    this.contact = {
      firstName: '',
      lastName: ''
    };
  }
}
