import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-hero-view',
  templateUrl: './hero-view.component.html',
  styleUrls: ['./hero-view.component.css']
})
export class HeroViewComponent {
  @Input() url: string = "url('../../../../../assets/img/comuna13Mirador.jpeg') no-repeat center center/cover";
}
