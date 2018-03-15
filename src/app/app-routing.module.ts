import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { StoriesComponent } from "./components/stories/stories.component";

const routes: Routes = [
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "stories",
    component: StoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
