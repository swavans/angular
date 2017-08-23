import {
  OnInit,
  Directive,
  ComponentFactoryResolver,
  ViewContainerRef,
  ComponentRef,
  ComponentFactory,
  ElementRef,
  Input
} from '@angular/core';
import {TypeaheadPopupComponent} from './typeahead-popup.component';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/startWith';

@Directive({
  selector: 'input[appTypeahead]',
  host: {'[value]': 'value'}
})
export class TypeaheadDirective implements OnInit {

  private componentRef: ComponentRef<TypeaheadPopupComponent>;
  private componentFactory: ComponentFactory<TypeaheadPopupComponent>;

  value = '';


  constructor(private el: ElementRef,
              factoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef) {
    this.componentFactory = factoryResolver.resolveComponentFactory(TypeaheadPopupComponent);
  }

  ngOnInit() {
  }

  isOpen() {
    return !!this.componentRef;
  }

  open() {
    if (!this.isOpen()) {
      this.componentRef = this.viewContainerRef.createComponent(this.componentFactory);

      this.componentRef.instance.select.subscribe(text => {
        this.value = text;
        this.close();
      });
    }
  }

  close() {
    if (this.isOpen()) {
      this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.componentRef.hostView));
      this.componentRef = null;
    }
  }
}
