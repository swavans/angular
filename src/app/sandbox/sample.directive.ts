import {OnInit, Directive} from '@angular/core';

@Directive({
  selector: '[appSample]'
})
export class SampleDirective implements OnInit {

  ngOnInit() {}
}
