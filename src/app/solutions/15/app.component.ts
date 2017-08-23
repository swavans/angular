import {Component} from '@angular/core';

@Component({
  template: `
    <div class="card">
      <div class="card-block">
        <div class="card-title"><h2>Typeahead Directive</h2></div>
        <hr>
        <div class="row">
          <div class="col">
            <h4>Component</h4>
            <app-typeahead></app-typeahead>
          </div>

          <div class="col">
            <h4>Directive</h4>
            <input type="text" class="form-control"
              ex-start
              appTypeahead
              ex-end/>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AppComponent {
}
