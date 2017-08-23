import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {ContactService} from '../contact.service';
import {Contact} from '../contact';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html'
})
export class EditPageComponent implements OnInit {

  contact: Contact;

  constructor(private service: ContactService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => this.contact = data['contact']);
  }

  onSave(contact: Contact) {
    this.service.save(contact);
    this.goBack();
  }

  goBack() {
    this.router.navigate(['list'], {relativeTo: this.route.parent});
  }
}
