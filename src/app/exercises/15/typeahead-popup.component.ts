import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-typeahead-popup',
  host: {'class': 'dropdown-menu', 'style': 'display: block;'},
  template: `
      <button *ngFor="let r of results" type="button" class="dropdown-item">
          {{ r }}
      </button>
    `
})
export class TypeaheadPopupComponent {

  @Input()
  results: string[] = [];

}
