import {
  Component, ElementRef, ViewContainerRef, ComponentFactoryResolver, Injector,
  ApplicationRef, TemplateRef, DoCheck
} from '@angular/core';

@Component({
  template: `
    <h3>Rendering</h3>

    <br>

    <input type="text" [value]="name" (input)="name = $event.target.value" class="form-control"/>

    <hr>

    <button (click)="addComponent()" class="btn btn-primary">New Component</button>

    <hr>
  `,
})
export class AppComponent implements DoCheck {

  name = 'Angular';


  addComponent(tpl?: TemplateRef<any>) {
  }

  ngDoCheck() {
  }

  addTemplate(tpl?: TemplateRef<any>) {
  }
}
