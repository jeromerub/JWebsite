import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private title: string;

  constructor(private translate: TranslateService) {

    this.initTranslation();
    this.translate.get('title').subscribe(value => this.title = value);
  }

  initTranslation(): void{
    this.translate.setDefaultLang('en');
    let locale: string = navigator.language.split('-')[0];
    this.translate.use(locale);
  }

}
