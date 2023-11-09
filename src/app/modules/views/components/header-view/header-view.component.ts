import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header-view',
  templateUrl: './header-view.component.html',
  styleUrls: ['./header-view.component.css']
})
export class HeaderViewComponent {
  @ViewChild('dinamicAppNavbar', { read: ElementRef }) dinamicAppNavbar!: ElementRef;
  @ViewChild('staticAppNavbar', { read: ElementRef }) staticAppNavbar!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    const dinamicNavBar = this.dinamicAppNavbar.nativeElement.querySelector("nav");
    const staticNavBar = this.staticAppNavbar.nativeElement.querySelector("nav");
    dinamicNavBar.classList.add('second-disappear-scroll');
    const offsetSecondScroll = dinamicNavBar.offsetTop;
    const staticNavBarHeight = staticNavBar.offsetHeight;
    window.onscroll = () => {
      if(window.pageYOffset > 0){
        if(window.pageYOffset > staticNavBarHeight){
          if(window.pageYOffset < offsetSecondScroll - 25){
            dinamicNavBar.classList.remove('second-disappear-scroll');
            dinamicNavBar.classList.remove('third-scroll');
            dinamicNavBar.classList.add('second-scroll');
          }else{
            dinamicNavBar.classList.remove('second-disappear-scroll');
            dinamicNavBar.classList.remove('second-scroll');
            dinamicNavBar.classList.add('third-scroll');
          }
        }else{
          dinamicNavBar.classList.remove('second-scroll');
          dinamicNavBar.classList.add('second-disappear-scroll');
        }
      }
    }
  }
}
