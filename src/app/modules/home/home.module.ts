import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Components from './components';


@NgModule({
  declarations: [
    Components.AboutOptionComponent,
    Components.AboutDescriptionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Components.AboutOptionComponent,
    Components.AboutDescriptionComponent
  ]
})
export class HomeModule { }
