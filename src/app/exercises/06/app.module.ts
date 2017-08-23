import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {EditContactComponent} from './edit-contact/edit-contact.component';
import {CommonModule} from '@angular/common';
import {ContactListComponent} from './contact-list/contact-list.component';

@NgModule({
  declarations: [EditContactComponent, ContactListComponent, AppComponent],
  imports: [CommonModule],
})
export class AppModule {
}
