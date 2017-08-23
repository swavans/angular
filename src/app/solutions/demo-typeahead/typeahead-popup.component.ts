import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-typeahead-popup',
  host: {'class': 'dropdown-menu', 'style': 'display: block;'},
  template: `
      <button *ngFor="let r of results" type="button" class="dropdown-item" (click)="select.next(r)">
        {{ r }}
      </button>
    `
})
export class TypeaheadPopupComponent {

  @Input()
  results: string[];

  @Output()
  select = new EventEmitter<string>();
}
