import {
  OnInit
} from '@angular/core';

const COLOURS = ['red', 'yellow', 'pink', 'green', 'blue', 'salmon', 'black', 'orange', 'white', 'purple'];

export class TypeaheadDirective implements OnInit {

  results: string[] = Array.from(COLOURS);
  visible = true;

  ngOnInit() {
  }

  open() {
  }

  close() {
  }

  private search(text): string[] {
    return COLOURS.filter(r => r.includes(text));
  }
}
