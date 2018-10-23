import { AfterContentChecked, Component, OnChanges, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit, AfterContentChecked {

  title = 'Mag Nails';
  opened: boolean;

  seletedId: number;
  public innerWidth: any;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;

  }

  ngAfterContentChecked() {
    if (this.router.url === '/') {
      this.seletedId = 1;
    } else if (this.router.url === '/offer') {
      this.seletedId = 2;
    } else if (this.router.url === '/training') {
      this.seletedId = 3;
    } else if (this.router.url === '/work') {
      this.seletedId = 4;
    } else if (this.router.url === '/gallery') {
      this.seletedId = 5;
    } else if (this.router.url === '/staff') {
      this.seletedId = 6;
    } else if (this.router.url === '/contact') {
      this.seletedId = 7;
    } else if (this.router.url === '/cooperation') {
      this.seletedId = 8;
    } else if (this.router.url === '/price-list') {
      this.seletedId = 9;
    }

  }

  onResize(event) {
    this.innerWidth = event.target.innerWidth; // window width
  }

  addSelected(id: number) {
    this.seletedId = id;
  }

  getSize() {
    return this.innerWidth;
  }


}

