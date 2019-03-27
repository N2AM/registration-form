import { HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Utilities } from "./../helpers/utilities";
import {
  HttpClient,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
  HttpInterceptor
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { retry } from "rxjs/operators";
import { DialogService } from '../services/dialog.service';

@Injectable({
  providedIn: "root"
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private http: HttpClient,
    private utilities: Utilities,
    private dialog: DialogService
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.utilities.getUserToken();
    const clonedReq = req.clone({
      headers: new HttpHeaders({
        Authorization: token,
        lang: "en"
      })
    });
    return next.handle(clonedReq).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = "";
        if (error.error.message) {
          // client-side error
          this.dialog.openDialog({ msg: error.error.message, justOk: true });
          // errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          this.dialog.openDialog({ msg: error.message });
        }
        // window.alert(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
}
