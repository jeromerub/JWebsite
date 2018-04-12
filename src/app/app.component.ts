import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private translate: TranslateService) {

    this.initTranslation();
  }

  initTranslation(): void{
    this.translate.setDefaultLang('en');
    let locale: string = navigator.language.split('-')[0];
    this.translate.use(locale);
  }

  switchLanguage(): void{
    if(!this.translate.currentLang.localeCompare('en')) {
      this.translate.use('fr');
    } else {
      this.translate.use('en');
    }
  }

}
