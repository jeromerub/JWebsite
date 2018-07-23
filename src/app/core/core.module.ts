import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from '../shared/modules/shared.module';
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NavComponent,
    FooterComponent
  ],
  declarations: [
    NavComponent,
    FooterComponent
  ]
})
export class CoreModule { }
