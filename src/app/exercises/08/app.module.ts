import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactService} from './contact.service';

// TODO: import ng-bootstrap module here

@NgModule({
  declarations: [ContactListComponent, AppComponent],
  imports: [
    CommonModule
  ],
  providers: [ContactService]
})
export class AppModule {
}
