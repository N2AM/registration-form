import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalAuthService {

  constructor() { }
    isAuthenticated() {
    if (localStorage.getItem("TOKEN")) {
      return true;
    } else {
      return false;
    }
  }
}
