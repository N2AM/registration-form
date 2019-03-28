import { environment } from "./../../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user.model";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LocalAuthService {
  user = new BehaviorSubject(<User>null);
  constructor(private http: HttpClient) {}
  isAuthenticated() {
    let token = localStorage.getItem("REGTOKEN");
    if (token) {
      return true;
    } else {
      return false;
    }
  }
  register(data) {
    console.log(data);
    return this.http
      .post(environment.apiUrl + "register", data)
      .subscribe((user: User) => {
        this.user.next(user);
      });
  }
}
