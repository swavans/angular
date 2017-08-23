import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './contact.component';
import {AgeService} from './age.service';
import {CounterComponent} from './counter.component';

@NgModule({
  declarations: [AppComponent, ContactComponent, CounterComponent],
  imports: [CommonModule],
  providers: [AgeService]
})
export class AppModule {
}
