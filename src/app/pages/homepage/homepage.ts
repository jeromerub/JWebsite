import {Component} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'homepage',
  templateUrl: './homepage.html'
})

export class Homepage {

  isLeftVisible : string = 'left';

  constructor(private translate: TranslateService){
    this.initTranslation();
  }

  initTranslation(): void{
    this.translate.setDefaultLang('en');
    let locale: string = navigator.language.split('-')[0];
    this.translate.use(locale);
  }
}
