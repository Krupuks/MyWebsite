import { Component, Renderer2, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  activeLink: string = "";
  private toggleDropdownEnabled = true;

  constructor(private router: Router, private renderer: Renderer2, private el: ElementRef,private scrollService: ScrollService ) {
    this.router.events.subscribe(() => {
      this.activeLink = this.router.url;
    });
  }

  scrollToBottom() {
    this.scrollService.scrollToBottom();
  }

  ngOnInit() {
    setInterval(() => {
      const slideshowContainer = document.querySelector('.slideshow-container') as HTMLElement;
      const navbar = document.querySelector('.navbar') as HTMLElement;
      if (slideshowContainer.scrollTop >= 50 || this.isDropdownActive) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, 100);
  
    // Add the click event listener to clear the dropdown
    document.body.addEventListener('click', (event) => {
      const navbar = document.querySelector('.navbar') as HTMLElement;
      if (!navbar.contains(event.target as Node)) {
        this.clearDropdown();
      }
    });
  }

  isDropdownActive = false;
  initialOpacity = 0.5;

  toggleDropdown() {
    if (!this.toggleDropdownEnabled) return;

    this.isDropdownActive = !this.isDropdownActive;
    this.initialOpacity = this.isDropdownActive ? 1 : 0.5;

    this.toggleDropdownEnabled = false;
    setTimeout(() => {
      this.toggleDropdownEnabled = true;
    }, 300); // 300 milliseconds = 0.3 seconds
  }


  clearDropdown() {

    if(this.isDropdownActive){
      this.isDropdownActive = false;
      this.initialOpacity = 0.5;
  
      const collapseElement = this.el.nativeElement.querySelector('.collapse');
  
      if (collapseElement.classList.contains('show')) {
        this.renderer.removeClass(collapseElement, 'show');
        this.renderer.setStyle(collapseElement, 'height', '0');
      }
    }
  }
  
}
