import {Routes, RouterModule} from '@angular/router';
import {ExercisesComponent} from './exercises.component';
import {ROUTES as EX_ROUTES} from './exercises/exercises';
import {ROUTES as SOL_ROUTES} from './solutions/exercises';

import {LoginComponent} from './login.component';
import {SandboxComponent} from './sandbox/sandbox.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'exercises'},
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'exercises',
    component: ExercisesComponent
  },
  {
    path: 'exercise',
    children: EX_ROUTES
  },
  {
    path: 'solution',
    children: SOL_ROUTES
  },
  {
    path: 'sandbox',
    component: SandboxComponent
  },
  {path: '**', redirectTo: 'exercises'}
];

export const routingProviders = [];
export const routing = RouterModule.forRoot(routes, {useHash: true});
