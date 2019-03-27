import { NgtUniversalModule } from "@ng-toolkit/universal";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { TransferHttpCacheModule } from "@nguniversal/common";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./views/home/home.component";
import { httpInterceptorProviders } from "./shared/interceptors";
import { HeaderComponent } from "./views/header/header.component";
import { DialogComponent } from "./views/dialog/dialog.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, DialogComponent],
  imports: [
    CommonModule,
    NgtUniversalModule,
    TransferHttpCacheModule,
    HttpClientModule,

    AppRoutingModule
  ],
  providers: [httpInterceptorProviders]
})
export class AppModule {}
