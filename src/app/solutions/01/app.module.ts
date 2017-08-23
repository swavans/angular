import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
// ex-start
import {HelloWorldComponent} from './hello-world/hello-world.component';
// ex-end

@NgModule({
  declarations: [
    // ex-start
    HelloWorldComponent,
    // ex-end
    AppComponent
  ]
})
export class AppModule {
}
