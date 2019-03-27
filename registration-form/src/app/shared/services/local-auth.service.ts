import { environment } from './../../../environments/environment.prod';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LocalAuthService {
  constructor(private http: HttpClient) {}
  isAuthenticated() {
    if (localStorage.getItem("TOKEN")) {
      return true;
    } else {
      return false;
    }
  }
  register(data) {
    return this.http.post(environment.apiUrl + "/register", data);
  }
}
