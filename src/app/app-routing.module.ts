import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { StoriesComponent } from "./components/stories/stories.component";
import { NewStoryComponent } from './components/new-story/new-story.component';
import { StoryDetailsComponent } from './components/story-details/story-details.component';
import { UpdateComponent } from './components/update/update.component';
import { ValentineComponent } from "./components/valentine/valentine.component";
import { FrontComponent } from './components/front/front.component';


const routes: Routes = [
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    component: FrontComponent
  },
  {
    path: "stories",
    component: StoriesComponent
  },
  {
      path: "add-story",
      component: NewStoryComponent
  },
  {
    path: "stories/:id",
    component: StoryDetailsComponent
  },
  {
    path: "update/:id",
    component: UpdateComponent
  },
  {
    path: "valentine",
    component: ValentineComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
