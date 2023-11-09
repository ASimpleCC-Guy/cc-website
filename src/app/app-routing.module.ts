import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as Views from './views'

const routes: Routes = [
  {
  path: '',
  component: Views.HomeComponent,
  },
  {
    path: 'escritos',
    component: Views.EscritosComponent,
  }
];
@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
