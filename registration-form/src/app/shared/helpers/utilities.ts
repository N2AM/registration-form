import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Utilities {
  Constructor() {}

  getUserToken() {
    if (localStorage.getItem("REGTOKEN")) {
      return localStorage.getItem("REGTOKEN");
    } else {
      return " ";
    }
  }
}
