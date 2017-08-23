import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactService} from './contact.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {EditContactComponent} from './edit-contact/edit-contact.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ContactPageComponent} from './contact-page/contact-page.component';
import {ContactFilterDirective} from './contact-filter/contact-filter.directive';
import {EditPageComponent} from './edit-page/edit-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent, ContactListComponent, ContactFilterDirective,
    EditPageComponent, EditContactComponent
  ],
  imports: [CommonModule, NgbModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule],
  providers: [ContactService],
  entryComponents: [AppComponent]
})
export class AppModule {
}
