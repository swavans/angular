import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {TypeaheadDirective} from './typeahead.directive';
import {TypeaheadPopupComponent} from './typeahead-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    TypeaheadDirective,
    TypeaheadPopupComponent
  ],
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule, HttpClientJsonpModule],
  entryComponents: [TypeaheadPopupComponent]
})
export class AppModule {
}
