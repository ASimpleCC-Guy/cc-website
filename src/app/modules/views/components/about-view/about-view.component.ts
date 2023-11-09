import { Component, ViewChild, ElementRef } from '@angular/core';
import { AboutDescription } from 'src/app/modules/core/models/about-description';
import { AboutOption } from 'src/app/modules/core/models/about-option';

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.css']
})
export class AboutViewComponent {
  @ViewChild('appAboutDescription', { read: ElementRef }) appAboutDescription!: ElementRef;
  aboutOptions: AboutOption[];
  aboutOptionSelect: AboutDescription;

  constructor(){
    this.aboutOptions = [
      {
        src: "../../../assets/img/piedraPeñol.jpeg", 
        text: "Una vida", 
        aboutDesciption: {
          titleAboutDescription: "Una vida",
          quoteAboutDescription: "Cras vitae nunc hendrerit",
          textAboutDescription: "Pulvinar diam non, accumsan turpis. Maecenas bibendum volutpat nunc vel viverra. Proin tincidunt, massa et varius eleifend, nibh eros dictum felis, sit amet congue dui tellus in elit. Nam et accumsan dolor, quis ultrices lorem. Sed interdum metus nulla, sit amet pellentesque felis lobortis eu. Nulla vestibulum rutrum tortor quis pretium. Sed sit amet lacus viverra, aliquam urna sit amet, sagittis tortor. In mollis dui non pharetra maximus. In vel ex eu velit tincidunt dictum. In id consequat risus. Aliquam diam dui, rhoncus id augue eget, porta dapibus eros. Sed eu ultrices dolor. Fusce ultrices ullamcorper elit, sed finibus tortor mattis eget. Maecenas auctor luctus tortor id placerat. Vestibulum quis turpis felis."
        }
      }, 
      {
        src: "../../../assets/img/me.jpeg", 
        text: "Cristian Cerpa", 
        aboutDesciption: {
          titleAboutDescription: "string",
          quoteAboutDescription: "string",
          textAboutDescription: "string"
        }
      },
      {
        src: "../../../assets/img/miradorPicacho.jpeg", 
        text: "Este proyecto", 
        aboutDesciption: {
          titleAboutDescription: "string",
          quoteAboutDescription: "string",
          textAboutDescription: "string"
        }
      }
    ];
    this.aboutOptionSelect = {
      titleAboutDescription: "string",
      quoteAboutDescription: "string",
      textAboutDescription: "string"
    }
  }

  selectAbout(aboutOptionSelected: AboutOption){
    this.aboutOptionSelect = aboutOptionSelected.aboutDesciption;
    this.appAboutDescription.nativeElement.scrollIntoView();
  }
}