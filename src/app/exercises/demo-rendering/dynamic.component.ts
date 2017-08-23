import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-dynamic',
  template: `
    CMP: Hello, {{ name }}
  `
})
export class DynamicComponent {

  name = 'Angular';
}
