import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Components from './components';


@NgModule({
  declarations: [Components.NavbarComponent],
  imports: [
    CommonModule
  ],
  exports: [Components.NavbarComponent],
})
export class SharedModule { }
