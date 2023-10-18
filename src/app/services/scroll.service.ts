import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
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
