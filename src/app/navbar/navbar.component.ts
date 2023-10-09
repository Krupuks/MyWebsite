import { Component, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  activeLink: string = "";

  constructor(private router: Router, private renderer: Renderer2, private el: ElementRef ) {
    this.router.events.subscribe(() => {
      this.activeLink = this.router.url;
    });
  }
  scrollToBottom() {
    const slideshowContainer = document.querySelector('.slideshow-container') as HTMLElement;
  
    if (slideshowContainer) {
      const lastSlideContainer = slideshowContainer.querySelector('.slide-container:last-child') as HTMLElement;
  
      if (lastSlideContainer) {
        lastSlideContainer.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    }
  }



  isDropdownActive = false;
  initialOpacity = 0.5;

  toggleDropdown() {
    this.isDropdownActive = !this.isDropdownActive;
    this.initialOpacity = this.isDropdownActive ? 1 : 0.5;
  }
}
