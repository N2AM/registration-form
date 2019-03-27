import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { LocalAuthService } from '../services/local-auth.service';

@Injectable({
  providedIn: "root"
})
export class UnAuthGuard implements CanActivate {
  constructor(private router: Router, private authService: LocalAuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.authService.isAuthenticated() || localStorage.getItem("TYPE")) {
      return true;
    } else {
      // not logged in so redirect to Home page
      this.router.navigate([""]);
      return false;
    }
  }
}
