import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditContactComponent} from './edit-contact/edit-contact.component';
import {ContactListComponent} from './contact-list/contact-list.component';
import {AppComponent} from './app.component';
// ex-start
import {ContactListResolver} from './contact-list/contact-list.resolver';
import {ContactResolver} from './edit-contact/contact.resolver';
// ex-end

// TODO: inject empty contact in the 'create' url
// TODO: implement 2 data resolvers for 'edit' and 'list' urls
const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'list'
      },
      {
        path: 'create',
        component: EditContactComponent,
        // ex-start
        data: {
          contact: {
            firstName: '',
            lastName: ''
          }
        }
        // ex-end
      },
      {
        path: 'edit/:id',
        component: EditContactComponent,
        // ex-start
        resolve: {
          contact: ContactResolver
        }
        // ex-end
      },
      {
        path: 'list',
        component: ContactListComponent,
        // ex-start
        resolve: {
          contacts: ContactListResolver
        }
        // ex-end
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // ex-start
  providers: [ContactListResolver, ContactResolver],
  // ex-end
  exports: [RouterModule]
})
export class AppRoutingModule {
}
