import {Component} from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <p><a routerLink="/exercise/01">Ex 01. Hello World component</a></p>
    <p><a routerLink="/exercise/02">Ex 02. Component template syntax</a></p>
    <p><a routerLink="/exercise/03">Ex 03. Component hierarchy</a></p>
    <p>Ex 04. Unit testing</p>
    <p>Ex 05. Component testing</p>
    <p><a routerLink="/exercise/06">Ex 06. DI and Services</a></p>
    <p><a routerLink="/exercise/08">Ex 08. Pagination and filtering</a></p>
    <p><a routerLink="/exercise/09a">Ex 09a. Template-driven forms</a></p>
    <p><a routerLink="/exercise/09b">Ex 09b. Reactive forms</a></p>
    <p><a routerLink="/exercise/10">Ex 10. Routing</a></p>
    <p><a routerLink="/exercise/11">Ex 11. Observables, Promises, HTTP</a></p>
    <p><a routerLink="/exercise/12">Ex 12. Async routing</a></p>
    <p><a routerLink="/exercise/13">Ex 13. Secured routing</a></p>
    <p><a routerLink="/exercise/14">Ex 14. Advanced injection</a></p>
    <p><a routerLink="/exercise/15">Ex 15. Directives</a></p>
    <p><a routerLink="/exercise/16">Ex 16. Ngrx-Store</a></p>
    <hr>
    <p><a routerLink="/exercise/demo-change-detection">Demo: Change detection</a></p>
    <p><a routerLink="/exercise/demo-rendering">Demo: Rendering</a></p>
    <p><a routerLink="/exercise/demo-observables">Demo: Observables</a></p>
    <p><a routerLink="/exercise/demo-typeahead">Demo: Reactive typeahead</a></p>
    <p><a routerLink="/exercise/demo-data-flow">Demo: Observable services</a></p>
`
})
export class ExercisesComponent {
}
