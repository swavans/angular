import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {TypeaheadComponent} from './typeahead.component';
import {TypeaheadPopupComponent} from './typeahead-popup.component';
// ex-start
import {TypeaheadDirective} from './typeahead.directive';
// ex-end

@NgModule({
  declarations: [
    AppComponent, TypeaheadComponent, TypeaheadPopupComponent
    // ex-start
    , TypeaheadDirective
    // ex-end
  ],
  imports: [CommonModule]
  // ex-start
  ,
  entryComponents: [TypeaheadPopupComponent]
  // ex-end
})
export class AppModule {
}
