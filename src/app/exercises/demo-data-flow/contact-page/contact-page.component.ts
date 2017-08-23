import {Component} from '@angular/core';
import {Contact} from '../contact';
import {Observable} from 'rxjs/Observable';
import {ContactService} from '../contact.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html'
})
export class ContactPageComponent {

  page = 1;
  pageSize = 5;

  contacts$: Observable<Contact[]>;

  constructor(private service: ContactService,
              private router: Router,
              private route: ActivatedRoute) {
    this.contacts$ = service.contacts$;
  }

  onEdit(id: string) {
    this.router.navigate(['../edit', id], {relativeTo: this.route});
  }

  onRemove(id: string) {
    this.service.remove(id);
  }

  onFilter(text: string) {
    this.service.filter(text);
  }
}
