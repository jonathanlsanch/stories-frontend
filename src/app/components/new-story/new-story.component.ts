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

  constructor(
    private myAuthService: AuthService,
    private myRouter: Router,
    private myStoryService: StoryService
  ) {}
  
  ngOnInit() {
  }

}
