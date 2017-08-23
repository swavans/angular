import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';

// TODO: define application routes for 'create', 'edit/12' and 'list'
const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
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
