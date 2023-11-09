import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-escritos',
  templateUrl: './escritos.component.html',
  styleUrls: ['./escritos.component.css']
})
export class EscritosComponent {
  url: string = "url('../../../../../assets/img/arbol.jpg') no-repeat center center/cover";
  @ViewChild('stickyNavBar', { read: ElementRef }) stickyNavBar!: ElementRef;
  ngAfterViewInit(){
    const nav = this.stickyNavBar.nativeElement.querySelector('nav');
    nav.classList.add('third-scroll')
  }
}
