import {
  Component, ElementRef, ViewContainerRef, ComponentFactoryResolver, Injector,
  ApplicationRef, TemplateRef, DoCheck
} from '@angular/core';
// ex-start
import {DynamicComponent} from './dynamic.component';
// ex-end

@Component({
  template: `
    <h3>Rendering</h3>

    <br>

    <input type="text" [value]="name" (input)="name = $event.target.value" class="form-control"/>

    <hr>
    <!-- ex-start -->
    <ng-template #tpl >TPL: Hello, <span>{{ name }}</span></ng-template>
    <!-- ex-end -->

    <button (click)="addComponent()" class="btn btn-primary">New Component</button>
    <!-- ex-start -->
    <button (click)="addTemplate(tpl)" class="btn btn-primary">New Template</button>
    <!-- ex-end -->

    <hr>
  `,
})
export class AppComponent implements DoCheck {

  name = 'Angular';

  // ex-start
  constructor(private el: ElementRef,
              private vcr: ViewContainerRef,
              private injector: Injector,
              private cfr: ComponentFactoryResolver,
              private appRef: ApplicationRef) {
  }

  // ex-end

  addComponent(tpl?: TemplateRef<any>) {
    // ex-start
    const cf = this.cfr.resolveComponentFactory(DynamicComponent);
    const componentRef = cf.create(this.injector);

    this.el.nativeElement.parentNode.appendChild(componentRef.location.nativeElement);

    componentRef.instance.tpl = tpl;

    this.appRef.attachView(componentRef.hostView);

    console.log(this.el);
    // ex-end
  }

  ngDoCheck() {
    // ex-start
    console.log('check');
    // ex-end
  }

  addTemplate(tpl?: TemplateRef<any>) {
    // ex-start
    if (tpl) {
      const ev = tpl.createEmbeddedView({});

      ev.rootNodes.forEach(node => {
        this.el.nativeElement.parentNode.appendChild(node);
      });

      ev.detectChanges();
    }
    // ex-end
  }
}
