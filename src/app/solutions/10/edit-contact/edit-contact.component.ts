import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html'
})
export class EditContactComponent implements OnInit {

  id: number;
  form: FormGroup;

  constructor(public fb: FormBuilder,
              private contactService: ContactService,
              // ex-start
              private router: Router,
              // ex-end
              private route: ActivatedRoute) {
    this.form = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  ngOnInit() {
    // TODO: get the id from the route (from observable or snapshot) and get the contact using the service
    // ex-start
    this.route.params.subscribe(params => {
      const id = +params['id'];

      if (!isNaN(id)) {
        const contact = this.contactService.getContact(id);

        if (contact) {
          this.id = contact.id;
          this.form.patchValue(contact);
        }
      }
    });
    // ex-end
  }

  save() {
    // TODO: go back to the contact list after save using the router
    if (this.form.valid) {
      this.contactService.save(Object.assign({id: this.id}, this.form.value));
      // ex-start
      this.goBack();
      // ex-end
    }
  }

  goBack() {
    // TODO: use this method as a click handler for the 'back button'. You might need a Router injected
    // ex-start
    this.router.navigate(['list'], {relativeTo: this.route.parent});
    // ex-end
  }

  clear() {
    this.form.setValue({
      firstName: '',
      lastName: ''
    });
  }
}
