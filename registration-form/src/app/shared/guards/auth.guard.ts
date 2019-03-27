import { LocalAuthService } from './../services/local-auth.service';
import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService:LocalAuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      // not logged in so redirect to Home page
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
