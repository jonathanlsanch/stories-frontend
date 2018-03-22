import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { StoryService } from "../../services/story.service";
// import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-howitworks',
  templateUrl: './howitworks.component.html',
  styleUrls: ['./howitworks.component.css']
})
export class HowitworksComponent implements OnInit {
    logoutError: string;
    storyListError: string;
    stories: any;
    currentUser: string;
  
    constructor(
      private myAuthService: AuthService,
      private myRouter: Router,
      private myStoryService: StoryService
    ) {}
  
    ngOnInit() {
      this.myAuthService
        .checklogin()
        // If success, we are logged in.
        .then(resultFromApi => {
          this.currentUser = resultFromApi;
          console.log("user is: ", resultFromApi);
          this.getTheStories()
        })
  
        // Even if you don't do anything on error, catch to avoid a console error.
        .catch(err => {
          console.log(err);
          this.myRouter.navigate(["/"]);
        });
      // this.getTheStories();
    }
  
    getTheStories() {
      this.myStoryService.getAllStories()
      .subscribe(allTheStories => {
        // console.log("allTheStories: ", allTheStories)
          this.stories = allTheStories;
          console.log("stories", this.stories)
        },
        () => {
          this.storyListError = "Sorry, no stories.";
        }
      );
    } // close getTheStories()
    logMeOutPls() {
      this.myAuthService
        .logout()
        .then(() => {
          this.myRouter.navigate(["/"]);
        })
        .catch(() => {
          this.logoutError = "Log out went bad.";
        });
    } // close logMeOutPls()
}
