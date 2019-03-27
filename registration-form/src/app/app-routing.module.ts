import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { UnAuthGuard } from "./shared/guards/unAuth.guard";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "auth",
    loadChildren: "./views/auth/auth.module#AuthModule",
    canActivate: [UnAuthGuard]
  },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
