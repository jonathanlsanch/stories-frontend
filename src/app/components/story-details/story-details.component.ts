import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { StoryService } from "../../services/story.service";
import { environment } from "../../../environments/environment";
import "rxjs/add/operator/toPromise";


@Component({
  selector: 'app-story-details',
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.css']
})
export class StoryDetailsComponent implements OnInit {
  story: Object;

  constructor(
    private myAuthService: AuthService,
    private myRouter: Router,
    private myRoute: ActivatedRoute,
    private myStoryService: StoryService
  ) {}

  ngOnInit() {
    this.myAuthService
      .checklogin()
      // If success, we are logged in.
      .then()
      // Even if you don't do anything on error, catch to avoid a console error.
      .catch(err => {
        console.log(err);
        this.myRouter.navigate(["/"]);
      });
    this.myRoute.params.subscribe(params => {
      this.getStoryDetails(params["id"]);
    });
  }

  //getting a story and pulling it's details
  getStoryDetails(parameter){
    this.myStoryService.getId(parameter)
    .then( res => {
      this.story = res;
      console.log("story details: ", this.story)
    })
    .catch()
  }


}
