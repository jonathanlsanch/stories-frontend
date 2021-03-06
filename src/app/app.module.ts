import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
// services stuff
import { AuthService } from './services/auth.service';
import { SignupComponent } from './components/signup/signup.component'
import { LoginComponent } from "./components/login/login.component";
import { HttpModule } from "@angular/http";
import { StoryService } from "./services/story.service";


//routes
import { AppRoutingModule  } from './app-routing.module';
import { StoriesComponent } from './components/stories/stories.component';
import { NewStoryComponent } from './components/new-story/new-story.component';
import { StoryDetailsComponent } from './components/story-details/story-details.component';
import { UpdateComponent } from './components/update/update.component';
import { ValentineComponent } from './components/valentine/valentine.component';
import { FrontComponent } from './components/front/front.component';
import { HowitworksComponent } from './components/howitworks/howitworks.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    StoriesComponent,
    NewStoryComponent,
    StoryDetailsComponent,
    UpdateComponent,
    ValentineComponent,
    FrontComponent,
    HowitworksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthService, StoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
