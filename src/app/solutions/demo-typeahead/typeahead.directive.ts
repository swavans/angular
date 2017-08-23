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

  // ex-start
  @Input()
  appTypeahead: (o: Observable<string>) => Observable<string[]> = () => Observable.of([])
  // ex-end

  constructor(private el: ElementRef,
              factoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef) {
    this.componentFactory = factoryResolver.resolveComponentFactory(TypeaheadPopupComponent);
  }

  ngOnInit() {
    // ex-start
    Observable.fromEvent(this.el.nativeElement, 'input', $event => $event.target.value)
      .startWith('')
      .do(_ => console.log('before'))
      .let(this.appTypeahead)
      .do(_ => console.log('after'))
      .subscribe(results => {
        if (results.length === 0) {
          this.close();
        } else {
          this.open();
          this.componentRef.instance.results = results;
        }
      });
    // ex-end
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
