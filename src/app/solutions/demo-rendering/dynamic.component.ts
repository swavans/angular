import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-dynamic',
  template: `
    CMP: Hello, {{ name }}
    <!-- ex-start -->
    <ng-template [ngTemplateOutlet]="tpl"></ng-template>
    <!-- ex-end -->
  `
})
export class DynamicComponent {
  // ex-start
  @Input()
  tpl: TemplateRef<any>;
  // ex-end

  name = 'Angular';
}
