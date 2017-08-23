import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {DynamicComponent} from './dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent
  ],
  imports: [CommonModule],
  entryComponents: [DynamicComponent]
})
export class AppModule {
}
