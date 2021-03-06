import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditContactComponent} from './edit-contact/edit-contact.component';
import {ContactListComponent} from './contact-list/contact-list.component';
import {AppComponent} from './app.component';
import {ContactListResolver} from './contact-list/contact-list.resolver';
import {ContactResolver} from './edit-contact/contact.resolver';
// ex-start
import {AdminGuard} from './admin-guard.service';
// ex-end

// TODO: Declare and use a guard to protect the `edit/:id` route
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
        data: {
          contact: {
            firstName: '',
            lastName: ''
          }
        }
      },
      {
        path: 'edit/:id',
        component: EditContactComponent,
        resolve: {
          contact: ContactResolver
        }
        // ex-start
        ,
        canActivate: [AdminGuard]
        // ex-end
      },
      {
        path: 'list',
        component: ContactListComponent,
        resolve: {
          contacts: ContactListResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  providers: [
    ContactListResolver,
    ContactResolver
    // ex-start
    ,
    AdminGuard
    // ex-end
  ],

  exports: [RouterModule]
})
export class AppRoutingModule {
}
