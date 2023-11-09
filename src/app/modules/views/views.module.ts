import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Modules from '../../modules';
import * as Components from './components';

@NgModule({
  declarations: [
    Components.AboutViewComponent,
    Components.HeaderViewComponent,
    Components.HeroViewComponent
  ],
  imports: [
    CommonModule,
    Modules.SharedModule,
    Modules.HomeModule
  ],
  exports: [
    Components.AboutViewComponent,
    Components.HeaderViewComponent,
    Components.HeroViewComponent
  ],
})
export class ViewsModule { }
