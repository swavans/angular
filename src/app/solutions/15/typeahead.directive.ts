import {
  OnInit
  // ex-start
  ,
  Directive,
  ComponentFactoryResolver,
  ViewContainerRef,
  ComponentRef,
  ComponentFactory
// ex-end
} from '@angular/core';
// ex-start
import {TypeaheadPopupComponent} from './typeahead-popup.component';
// ex-end

const COLOURS = ['red', 'yellow', 'pink', 'green', 'blue', 'salmon', 'black', 'orange', 'white', 'purple'];

// ex-start
@Directive({
  selector: 'input[appTypeahead]',
  host: {
    '(input)': 'onChange($event.target.value)',
    '[value]': 'value'
  }
})
// ex-end
export class TypeaheadDirective implements OnInit {

  // ex-start
  private componentRef: ComponentRef<TypeaheadPopupComponent>;
  private componentFactory: ComponentFactory<TypeaheadPopupComponent>;

  value = '';
  // ex-end
  results: string[] = Array.from(COLOURS);
  visible = true;

  // ex-start
  constructor(factoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef) {
    this.componentFactory = factoryResolver.resolveComponentFactory(TypeaheadPopupComponent);
  }

  // ex-end
  ngOnInit() {
    // ex-start
    this.onChange('');
    // ex-end
  }

  // ex-start
  isOpen() {
    return !!this.componentRef;
  }

  // ex-end
  open() {
    // ex-start
    if (!this.isOpen()) {
      this.componentRef = this.viewContainerRef.createComponent(this.componentFactory);
      this.setInputs();

      this.componentRef.instance.select.subscribe(text => {
        this.value = text;
        this.close();
      });
    }
    // ex-end
  }

  close() {
    // ex-start
    if (this.isOpen()) {
      this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.componentRef.hostView));
      this.componentRef = null;
    }
    // ex-end
  }

  // ex-start
  onChange(text) {
    this.results = this.search(text);
    this.visible = this.results.length > 0;

    if (this.visible) {
      this.open();
      this.setInputs();
    } else {
      this.close();
    }
  }

  private setInputs() {
    this.componentRef.instance.results = this.results;
  }

  // ex-end
  private search(text): string[] {
    return COLOURS.filter(r => r.includes(text));
  }
}
