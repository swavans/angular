import {Component} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import {AuthService} from './auth.service';

@Component({
  selector: 'app-ng-training',
  template: `
    <nav class="navbar sticky-top bg-faded flex-row">
      <a class="navbar-brand">Angular training</a>
      <a role="button" class="btn btn-outline" href="" routerLink="/exercises">Exercises</a>
      <a role="button" class="btn btn-outline" href="http://localhost:8080" target="_blank">Slides</a>
      <a *ngIf="showDatabase" role="button" class="btn btn-outline" href="http://localhost:3000" target="_blank">Database</a>

      <span class="ml-auto">
        <a *ngIf="showLogin && !authService.isLoggedIn"
           role="button" href=""
           routerLink="/login" [queryParams]="loginUrlQueryParams"
           class="btn btn-info">Login</a>
        <a *ngIf="showLogin && authService.isLoggedIn" role="button" href="" (click)="logout($event)"
           class="btn btn-info">Logout</a>
        <a *ngIf="isSolution || isExercise" role="button" href="" class="btn btn-outline-primary"
           [routerLink]="routerLink">{{ isSolution ? 'Back to exercise' : 'See solution'}}</a>
      </span>
    </nav>
    <div class="container">
      <router-outlet class="p-1"></router-outlet>
    </div>
  `
})
export class TrainingComponent {

  isSolution = false;
  isExercise = false;
  showDatabase = false;
  routerLink: string[] = [];
  showLogin = false;
  loginUrlQueryParams: any;

  constructor(private router: Router, public authService: AuthService) {
    router.events
      .filter(e => e instanceof NavigationEnd)
      .do(e => this.loginUrlQueryParams = {goBack: (<NavigationEnd>e).url})
      .map(e => (<NavigationEnd>e).url.split('/'))
      .subscribe(parts => {
        this.isSolution = parts[1] === 'solution';
        this.isExercise = parts[1] === 'exercise';
        this.showDatabase = +parts[2] > 10;
        this.showLogin = +parts[2] === 13;
        this.routerLink = ['/', this.isSolution ? 'exercise' : 'solution', parts[2]];
      });
  }

  logout($event) {
    $event.preventDefault();
    this.authService.logout();
    this.router.navigate([this.router.url]);
  }
}
