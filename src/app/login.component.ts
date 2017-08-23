import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="row justify-content-md-center">
      <div class="col col-md-auto">
        <p>{{message}}</p>
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div class="col col-md-auto">
        <button (click)="login()" *ngIf="!authService.isLoggedIn" class="btn btn-success">Login</button>
        <button (click)="logout()" *ngIf="authService.isLoggedIn" class="btn btn-outline-success">Logout</button>
      </div>
    </div>
  `
})
export class LoginComponent {
  message: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    const goBack = this.activeRoute.snapshot.queryParams['goBack'];
    if (!this.authService.redirectUrl && goBack) {
      this.authService.redirectUrl = goBack;
    }
    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        const redirect = this.authService.redirectUrl;
        if (redirect) {
          this.router.navigate([redirect]);
        }
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
    this.router.navigate([this.router.url]);
  }
}
