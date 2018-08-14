import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/modules/shared.module';
import { SlidePanelComponent } from "./slide-panel/slide-panel.component";



@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SlidePanelComponent
  ],
  declarations: [
    SlidePanelComponent
  ]
})
export class ComponentModule { }
