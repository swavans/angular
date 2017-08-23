import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {TypeaheadComponent} from './typeahead.component';
import {TypeaheadPopupComponent} from './typeahead-popup.component';

@NgModule({
  declarations: [
    AppComponent, TypeaheadComponent, TypeaheadPopupComponent
  ],
  imports: [CommonModule]
})
export class AppModule {
}
