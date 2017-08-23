import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {EditContactComponent} from './edit-contact/edit-contact.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [EditContactComponent, AppComponent],
  imports: [CommonModule, FormsModule]
})
export class AppModule {
}
