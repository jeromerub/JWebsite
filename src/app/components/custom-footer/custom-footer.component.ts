import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'custom-footer',
  templateUrl: './custom-footer.component.html',
  styleUrls: ['./custom-footer.component.css']
})
export class CustomFooterComponent implements OnInit {

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
  }

}
