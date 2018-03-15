import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { environment } from "../../environments/environment";

@Injectable()
export class StoryService {

  constructor(private myHttp: Http) {}

  getAllStories(){
    return this.myHttp.get(`${environment.apiBase}/api/stories`,
    { withCredentials: true })
    .map(res => res.json())
  }
}
