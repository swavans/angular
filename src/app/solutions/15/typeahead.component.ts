import {Component} from '@angular/core';

const COLOURS = ['red', 'yellow', 'pink', 'green', 'blue', 'salmon', 'black', 'orange', 'white', 'purple'];

@Component({
  selector: 'app-typeahead',
  host: {'style': 'display: block;'},
  template: `
      <input #i type="text" class="form-control" (input)="onChange($event.target.value)"/>

      <app-typeahead-popup *ngIf="showPopup"
          [results]="results"
          ex-start
          (select)="i.value = $event; showPopup = false"
          ex-end>
      </app-typeahead-popup>
    `
})
export class TypeaheadComponent {

  results: string[] = Array.from(COLOURS);
  showPopup = true;

  onChange(text) {
    this.results = this.search(text);
    this.showPopup = this.results.length > 0;
  }

  private search(text): string[] {
    return COLOURS.filter(r => r.includes(text));
  }
}
