import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  scrollElementSlower(element : string, value : number) {
    const kev = document.querySelector(element) as HTMLElement;
    const slide = document.querySelector('.slide-container') as HTMLElement;
  
    console.log(kev)
    if (kev && slide) {
    const slideRect = slide.getBoundingClientRect();
    kev.style.top = `calc(var(--posY) - var(--scale) * var(--theBoysY)/2 - ${slideRect.top / value}px)`;
    }
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
}
