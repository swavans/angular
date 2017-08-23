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

    <!-- ex-start -->
    <input type="text" class="form-control" [appTypeahead]="transform"/>
    <!-- ex-end -->
  `,
  // ex-start
  providers: [DataService]
  // ex-end
})
export class AppComponent {

  loading = false;
  error = false;
  // ex-start
  constructor(private service: DataService) {
    this.transform = this.transform.bind(this);
  }

  transform(text$: Observable<string>): Observable<string[]> {
    return text$
      .debounceTime(300)
      .distinctUntilChanged()
      .do(_ => this.loading = true)
      .switchMap(text => this.service.search(text)
        .retry(2)
        .catch(_ => {
          this.error = true;
          return Observable.of([]);
        })
      )
      .do(_ => this.loading = false)
      .share();
  }

  // ex-end
}
