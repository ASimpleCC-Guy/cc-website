import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() idNavBar: string;
  showedNavBarCollapse: boolean;
  constructor(){
    this.idNavBar = '#idNavBar'
    this.showedNavBarCollapse = false;
  }
  async showNavBarCollapse(){
    this.showedNavBarCollapse = !this.showedNavBarCollapse;
    const queryNavBarCollapse = this.idNavBar + ' #navbarNav'
    const navBarCollapse = document.querySelector(queryNavBarCollapse) as Element;
    if(this.idNavBar === "#staticAppNavbar"){
      if(this.showedNavBarCollapse){
        navBarCollapse.classList.add('show')
        setTimeout(() => {
          navBarCollapse.classList.add('static')
        }, .1)
      }else{
        navBarCollapse.classList.remove('static')
        setTimeout(() => {
          navBarCollapse.classList.remove('show')
        }, 1000)    }
    }else{
      if(this.showedNavBarCollapse){
        navBarCollapse.classList.add('show')
        setTimeout(() => {
          navBarCollapse.classList.add('dinamic')
        }, .1);
        setTimeout(() => {
          window.scrollTo(0, 935)
        }, .1);
      }else{
        navBarCollapse.classList.remove('dinamic')
        setTimeout(() => {
          navBarCollapse.classList.remove('show')
        }, 1000)    }
    }
   
  }
}
