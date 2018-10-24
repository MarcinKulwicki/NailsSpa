import {
  Component,
  OnInit
} from '@angular/core';
import { WorkService } from '../services/work/work.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  title: String;
  episode: number;
  body: string;
  createdAt: any;
  tags: Array<String>;

  constructor(private content: WorkService) {

  }

  ngOnInit() {
    this.content.getContent('3D0LBTecAgMkOO00qs6uKS').then(entry => {
        // this.entry = entry;
        console.log(entry);
        this.title = entry.fields.title;
        this.episode = entry.fields.episode;
        this.body = entry.fields.body;
        this.createdAt = entry.fields.createdAt;
        this.tags = entry.fields.tags;
      }
    );


  }

}
