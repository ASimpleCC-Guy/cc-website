import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-option',
  templateUrl: './about-option.component.html',
  styleUrls: ['./about-option.component.css']
})
export class AboutOptionComponent {
  @Input() imgRoot: string = "../../../assets/img/piedraPeñol.jpeg";
  @Input() cardText: string = "Default";
}
