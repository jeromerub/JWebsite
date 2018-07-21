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
        texts.home,
        texts.news,
        texts.skills,
        texts.experience,
        texts.articles,
        texts.contacts,
        texts.about
      ];
    });


  }

}
