import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {ContactListComponent} from './components/contact-list/contact-list.component';
import {ContactService} from './contact.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {EditContactComponent} from './components/edit-contact/edit-contact.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ContactPageComponent} from './containers/contact-page/contact-page.component';
import {ContactFilterDirective} from './components/contact-filter/contact-filter.directive';
import {EditPageComponent} from './containers/edit-page/edit-page.component';
import {environment} from '../../../environments/environment';

import {reducers} from './reducers';
import {metaReducers} from './reducers/meta';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {ContactEffects} from './effects/contacts';

import './rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent, ContactListComponent, ContactFilterDirective,
    EditPageComponent, EditContactComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,

    StoreModule.forRoot(reducers, {metaReducers}),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([ContactEffects])
  ],
  providers: [ContactService],
  entryComponents: [AppComponent]
})
export class AppModule {
}
