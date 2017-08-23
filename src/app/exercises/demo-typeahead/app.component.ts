import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {DataService} from './data.service';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';

@Component({
  template: `
    <h3>Typeahead demo</h3>

    <br>

    <div [style.visibility]="loading ? 'visible' : 'hidden'">Loading...</div>
    <div *ngIf="error" class="alert alert-danger">Error!</div>

  `,
})
export class AppComponent {

  loading = false;
  error = false;
}
