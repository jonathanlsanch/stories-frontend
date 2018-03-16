import { Component, OnInit } from '@angular/core';
import { StoryService } from "../../services/story.service";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-story',
  templateUrl: './new-story.component.html',
  styleUrls: ['./new-story.component.css']
})
export class NewStoryComponent implements OnInit {
  
  storyData = {
    category: "",
    title: "",
    content: ""
  };

  savingErr: string;

  constructor(
    private myAuthService: AuthService,
    private myRouter: Router,
    private myStoryService: StoryService
  ) {}

  ngOnInit() {
  }
  
  saveNewStory(){
    this.myStoryService
    .createNewStory(this.storyData)
    .then( res => {
      this.storyData = {
        category: "",
        title: "",
        content: ""
      } 
      this.savingErr = "";
      this.myRouter.navigate(['/stories'])
    }
    )
    .catch( err => {
      this.savingErr = "Something is wrong with saving."
    })
  }

}
