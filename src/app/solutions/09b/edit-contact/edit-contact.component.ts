import {Component, Input, OnChanges} from '@angular/core';
import {Contact} from '../contact';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html'
})
export class EditContactComponent implements OnChanges {

  @Input() contact: Contact;

  form: FormGroup = new FormGroup(<any>[]);

  constructor(public fb: FormBuilder) {
    // ex-start
    this.form = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
    // ex-end
  }

  ngOnChanges() {
    this.patchValue(this.contact);
  }

  save() {
    if (this.form.valid) {
      this.clear();
    }
  }

  clear() {
    // TODO: implement method
    // ex-start
    this.patchValue({
      firstName: '',
      lastName: ''
    });
    // ex-end
  }

  private patchValue(value: Contact) {
    if (this.form && value) {
      this.form.patchValue(value);
    }
  }
}
