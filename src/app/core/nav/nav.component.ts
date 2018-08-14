import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private translateService: TranslateService) {
    this.loadMenus();
  }

  menuItems: any[] = ["test1", "test2"];

  ngOnInit() {
  }

  changeLanguage(language: string): void {
    this.translateService.use(language).subscribe(() => {
      this.loadMenus();
    });
  }

  private loadMenus():void{
    this.translateService.get('navButton', {}).subscribe((texts: any) => {
      this.menuItems = [
        {link: '/', name: texts.home},
        {link: '/', name: texts.news},
        {link: '/', name: texts.skills},
        {link: '/', name: texts.experience},
        {link: '/articles', name: texts.articles},
        {link: '/', name: texts.contacts},
        {link: '/', name: texts.about},
      ];
    });


  }

}

// ['home','news','skills','experience','articles','contacts','about']
// texts.home,
//   texts.news,
//   texts.skills,
//   texts.experience,
//   texts.articles,
//   texts.contacts,
//   texts.about
