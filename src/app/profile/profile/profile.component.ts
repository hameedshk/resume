import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [DatePipe]
})
export class ProfileComponent implements OnInit {
  age: number;
  birthdate: Date = new Date('08-10-1992');
  constructor(public datepipe: DatePipe, private translate: TranslateService) {
    translate.setDefaultLang('en');
  }


  useLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit() {
    let timeDiff = Math.abs(Date.now() - this.birthdate.getTime());
    this.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
  }

  linksResolve(item: string) {
    let link = '';
    switch (item) {
      case 'gmail': 
      link = 'mailto:kshameed7@gmail.com';
        break;
        case 'linkedin': 
        link = 'https://www.linkedin.com/in/syedhameed/';
          break;
      default:
        break;
    }
    return link;
  }

}
