import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { environment } from "../../environments/environment";

@Injectable()
export class StoryService {

  constructor(private myHttp: Http) {}

  getAllStories(){
    return this.myHttp
    .get(`${environment.apiBase}/api/stories`,
    { withCredentials: true })
    .map(res => res.json())
  }

  getId(id){
    return this.myHttp
    .get(`${environment.apiBase}/api/stories/${id}`,
    { withCredentials: true })
    .toPromise()
    .then(res => res.json())
    // .map(res => res.json())
  }


  createNewStory(dataToSend){
    return this.myHttp
    .post(`${environment.apiBase}/api/stories`, dataToSend,
    { withCredentials: true })
    .toPromise()
    .then(res => res.json());
  }

  // updateStory(id, updates){
  //   return this.myHttp.put(`${environment.apiBase}/api/stories/${id}`, updates, 
  //   { withCredentials: true })
  //   .map(res => res.json());
  // }
}
