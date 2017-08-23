import {Component, Input, OnChanges, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';

import {Contact} from '../contact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditContactComponent implements OnChanges {

  form: FormGroup;

  @Input()
  contact: Contact;

  @Output()
  save = new EventEmitter<Contact>();

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      id: [undefined],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  ngOnChanges() {
    this.form.patchValue(this.contact);
  }

  trySave() {
    if (this.form.valid) {
      this.save.next(Object.assign(this.form.value));
    }
  }

  clear() {
    this.form.patchValue({
      firstName: '',
      lastName: ''
    });
  }
}
