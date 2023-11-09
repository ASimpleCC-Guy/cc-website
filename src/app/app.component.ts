import { Component } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cc-website';
  ngOnInit(): void {
    //Inicializar libreria rellax para efecto parallax
    let rellax = new Rellax('.rellax');
  }
}
