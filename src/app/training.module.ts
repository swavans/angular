import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {routing, routingProviders} from './training.routes';
import {ExercisesComponent} from './exercises.component';
import {TrainingComponent} from './training.component';
import {MODULES as EX_MODULES} from './exercises/exercises';
import {MODULES as SOL_MODULES} from './solutions/exercises';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from './auth.service';
import {LoginComponent} from './login.component';
import {SandboxModule} from './sandbox/sandbox.module';

@NgModule({
  declarations: [
    TrainingComponent,
    ExercisesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SandboxModule,
    EX_MODULES,
    SOL_MODULES,
    NgbModule.forRoot(),
    routing
  ],
  providers: [routingProviders, AuthService],
  entryComponents: [TrainingComponent],
  bootstrap: [TrainingComponent]
})
export class TrainingModule {
}
