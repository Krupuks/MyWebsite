import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  activeLink: string = "";

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.activeLink = this.router.url;
    });
  }
  
  scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }


  isDropdownActive = false;
  initialOpacity = 0.5;

  toggleDropdown() {
    this.isDropdownActive = !this.isDropdownActive;
    this.initialOpacity = this.isDropdownActive ? 1 : 0.5;
  }
}
