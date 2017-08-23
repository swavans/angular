import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactService} from './contact.service';
// ex-start
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// ex-end

// TODO: import ng-bootstrap module here

@NgModule({
  declarations: [ContactListComponent, AppComponent],
  imports: [
    CommonModule
    // ex-start
    , NgbModule
    // ex-end
  ],
  providers: [ContactService]
})
export class AppModule {
}
