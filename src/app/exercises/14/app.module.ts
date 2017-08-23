import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ContactCardComponent} from './contact-card/contact-card.component';
import {CommonModule} from '@angular/common';
import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactEditorComponent} from './contact-editor/contact-editor.component';
import {FormsModule} from '@angular/forms';

import {RESTORE_SERVICE} from './restore.service.token';
import {RestoreServiceImpl} from './restore.service.impl';

// TODO: check if the provided service functions correctly
@NgModule({
  declarations: [ContactCardComponent, ContactEditorComponent, ContactListComponent, AppComponent],
  imports: [CommonModule, FormsModule],
  providers: [
    {provide: RESTORE_SERVICE, useClass: RestoreServiceImpl}
  ]
})
export class AppModule {
}
