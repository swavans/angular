import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {EditContactComponent} from './edit-contact/edit-contact.component';
import {CommonModule} from '@angular/common';
import {ContactListComponent} from './contact-list/contact-list.component';
// ex-start
import {ContactService} from './contact.service';
// ex-end

@NgModule({
  declarations: [EditContactComponent, ContactListComponent, AppComponent],
  imports: [CommonModule],
  // ex-start
  providers: [ContactService]
  // ex-end
})
export class AppModule {
}
