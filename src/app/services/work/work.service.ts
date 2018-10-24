import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WorkService {

  private client = contentful.createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  constructor() {
  }

  logContent(contentId) {
    this.client.getEntry(contentId)
      .then((entry) => console.log(entry));
  }

  getContent(contentId) {
    return this.client.getEntry(contentId)
      .then(entry => {
          // this.entry = entry;
          // console.log(entry);
          return entry;
        }
      );
  }
}
