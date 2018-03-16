import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { StoryService } from "../../services/story.service";
import { environment } from "../../../environments/environment";
import "rxjs/add/operator/toPromise";


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  story = <any>{};

  public updatedStory: Object = {};
  public category: String;
  public title: String;
  public salutation: String;
  public recipient: String;
  public content: String;
  public signoff: String;
  public sender: String;

  saveError = "";

  baseUrl = environment.apiBase;

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

  // getting one story and its details
  getStoryDetails(id) {
    this.myStoryService.getId(id).then(theStoryDetails => {
      this.story = theStoryDetails;
    });
  }

  doTheUpdate(id, formData) {
    // console.log("=============== id: ", id);
    const formInfo = formData.form.controls;
    console.log("=============== formData: ", formInfo.category);
    this.category = formInfo.category.value;
    this.title = formInfo.title.value;
    this.salutation = formInfo.salutation.value;
    this.recipient = formInfo.recipient.value;
    this.content = formInfo.content.value;
    this.signoff = formInfo.signoff.value;
    this.sender = formInfo.sender.value;
    this.sendUpdatesToApi(id);
  }

  sendUpdatesToApi(id){
    this.updatedStory = {
      category: this.story.category,
      title: this.story.title,
      salutation: this.story.salutation,
      recipient: this.story.recipient,
      content: this.story.content,
      signoff: this.story.signoff,
      sender: this.story.sender,
    };
    console.log("updates:", this.updatedStory)
    this.myStoryService.updateStory(id, this.updatedStory)
      .toPromise()
      .then(()=>{
        this.myRouter.navigate(['/stories'])
      })
      .catch()
  }

  deleteThisStory(){
    if (!confirm("Are you sure you want to delete this letter?")) {
      return;
    }
    this.myStoryService
      .deleteStory(this.story._id)
      .then(() => {
        console.log("Success");
        this.myRouter.navigate(["/stories"]);
      })
      .catch(err => {
        alert("Sorry! Something went wrong.");
        console.log("Letter Delete Error");
        console.log(err);
      });
  }

}
