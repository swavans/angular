/* tslint:disable:one-line */
import {Injectable} from '@angular/core';
// ex-start
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../../auth.service';
// ex-end

// TODO: Use authentication service and router state here
@Injectable()
export class AdminGuard
// ex-start
implements CanActivate
// ex-end
{
  // ex-start
  constructor(private router: Router,
              public authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {

    if (this.authService.isLoggedIn) {
      this.authService.redirectUrl = '';
      return true;
    }

    this.authService.redirectUrl = state.url;

    this.router.navigate(['/login']);
    return false;
  }

  // ex-end
}
