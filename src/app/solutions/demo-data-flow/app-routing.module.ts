import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {ContactPageComponent} from './contact-page/contact-page.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import {EditResolver} from './edit-page/resolver';

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
        component: EditPageComponent,
        data: {
          contact: {
            firstName: '',
            lastName: ''
          }
        }
      },
      {
        path: 'edit/:id',
        component: EditPageComponent,
        resolve: {
          contact: EditResolver
        }
      },
      {
        path: 'list',
        component: ContactPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [EditResolver]
})
export class AppRoutingModule {
}
