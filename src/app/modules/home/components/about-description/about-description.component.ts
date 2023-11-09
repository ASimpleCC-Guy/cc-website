import { Component, Input } from '@angular/core';
import { AboutDescription } from 'src/app/modules/core/models/about-description';

@Component({
  selector: 'app-about-description',
  templateUrl: './about-description.component.html',
  styleUrls: ['./about-description.component.css']
})
export class AboutDescriptionComponent {
  @Input() aboutDescription: AboutDescription;

  constructor(){
    this.aboutDescription = {
      titleAboutDescription: "string",
      quoteAboutDescription: "string",
      textAboutDescription: "string"
    };
  }
}
