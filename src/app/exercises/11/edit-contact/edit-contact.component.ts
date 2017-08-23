import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {ContactService} from '../contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html'
})
export class EditContactComponent implements OnInit {

  id: string;
  form: FormGroup;

  constructor(public fb: FormBuilder,
              private contactService: ContactService,
              private route: ActivatedRoute,
              private router: Router) {
    this.form = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];

      if (id) {
        this.contactService.getContact(id)
          .then(contact => {
            this.id = contact.id;
            this.form.patchValue(contact);
          });
      }
    });
  }

  save() {
    if (this.form.valid) {
      // TODO: finish implementing method
    }
  }

  goBack() {
    this.router.navigate(['list'], {relativeTo: this.route.parent});
  }

  clear() {
    this.form.setValue({
      firstName: '',
      lastName: ''
    });
  }
}
