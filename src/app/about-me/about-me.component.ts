import { Component, OnInit } from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {



  title = 'abgular 4 with jquery';
  list = [];
  facebook = '';

  invocation = new XMLHttpRequest();
  urll = 'https://www.facebook.com/pg/mg.magnails/photos/?tab=album&album_id=815310551952570';

  constructor() {
  }

  ngOnInit() {
  }


  callOtherDomain(){
    this.facebook = $.getJSON( 'https://www.facebook.com/pg/mg.magnails/photos/?tab=album&album_id=815310551952570', function(data){
      $('#output').html(data.contents);
    });
    console.log(this.facebook)
  }


  getRegex() {
    const regex = /(https?:\/\/.*\.(?:png|jpg)?).+?(?=")/gm;
    const str = `src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-0/c0.51.200.200/p200x200/44038369_1125415787608710_8547047913325330432_n.jpg?_nc_cat=108&oh=38c4c4af65b66d4194360716b6a8dd16&oe=5C3EDFAB"`;
    let m;


    while ((m = regex.exec(str)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }
      // The result can be accessed through the `m`-variable.
      m.forEach((match, groupIndex) => {
        // console.log(`Found match, group ${groupIndex}: ${match}`);
        if (match.length > 1) {
          this.list.push(match);
        }

      });
    }
  }
  getWebsite(){
    this.facebook = $( '<body>' ).load( 'https://www.facebook.com/pg/mg.magnails/photos/?tab=album&album_id=815310551952570' );
    console.log(this.facebook);
  }


  toggleTitle() {
    $('.title').slideToggle(); //
  }

  showList() {
    console.log(this.list);
  }
}
