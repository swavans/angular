import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SandboxComponent} from './sandbox.component';
import {SampleComponent} from './sample.component';
import {SampleDirective} from './sample.directive';

@NgModule({
  declarations: [
    SampleComponent,
    SampleDirective,
    SandboxComponent
  ],
  imports: [CommonModule]
})
export class SandboxModule {
}
