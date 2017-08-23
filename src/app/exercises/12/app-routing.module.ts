import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditContactComponent} from './edit-contact/edit-contact.component';
import {ContactListComponent} from './contact-list/contact-list.component';
import {AppComponent} from './app.component';

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
      },
      {
        path: 'edit/:id',
        component: EditContactComponent,
      },
      {
        path: 'list',
        component: ContactListComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
