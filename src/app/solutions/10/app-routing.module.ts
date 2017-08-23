import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
// ex-start
import {EditContactComponent} from './edit-contact/edit-contact.component';
import {ContactListComponent} from './contact-list/contact-list.component';
// ex-end
import {AppComponent} from './app.component';

// TODO: define application routes for 'create', 'edit/12' and 'list'
const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      // ex-start
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'list'
      },
      {
        path: 'create',
        component: EditContactComponent
      },
      {
        path: 'edit/:id',
        component: EditContactComponent
      },
      {
        path: 'list',
        component: ContactListComponent
      }
      // ex-end
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
