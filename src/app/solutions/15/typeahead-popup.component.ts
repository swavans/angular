import {
  Component,
  Input
  // ex-start
  ,
  Output,
  EventEmitter
  // ex-end
} from '@angular/core';

@Component({
  selector: 'app-typeahead-popup',
  host: {'class': 'dropdown-menu', 'style': 'display: block;'},
  template: `
      <button *ngFor="let r of results" type="button" class="dropdown-item"
        ex-start
        (click)="select.next(r)"
        ex-end>
          {{ r }}
      </button>
    `
})
export class TypeaheadPopupComponent {

  @Input()
  results: string[] = [];

  // ex-start
  @Output()
  select = new EventEmitter<string>();
  // ex-end
}
