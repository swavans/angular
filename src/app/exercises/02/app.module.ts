import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {EditContactComponent} from './edit-contact/edit-contact.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [EditContactComponent, AppComponent],
  imports: [CommonModule]
})
export class AppModule {
}
