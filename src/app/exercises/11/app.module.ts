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

@NgModule({
  declarations: [ContactListComponent, EditContactComponent, AppComponent],
  imports: [CommonModule, NgbModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule],
  providers: [ContactService]
})
export class AppModule {
}
