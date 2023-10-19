import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  
  private _spaceMoves = true;
  
  get spaceMoves() {
    return this._spaceMoves;
  }

  set spaceMoves(value: boolean) {
    this._spaceMoves = value;
  }

  scrollElementSlower(element : string, value : number) {
    const kev = document.querySelector(element) as HTMLElement;
    const slide = document.querySelector('.slide-container') as HTMLElement;
  
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

  moveWithMouse(){
    if (this.spaceMoves) {
      const parallax_el = document.querySelectorAll(".parallax");
  
    let xValue = 0, yValue = 0;
  
    window.addEventListener("mousemove", (e) => {
      xValue = e.clientX - window.innerWidth / 2;
      yValue = e.clientY - window.innerHeight / 2;
  
      parallax_el.forEach((el) => {
        let speedx = el.getAttribute('data-speedx');
        let speedy = el.getAttribute('data-speedy');
  
        if (speedx && speedy) {
          (el as HTMLElement).style.transform =
            `translateX(calc(-50% + ${ -xValue * parseFloat(speedx)}px))
             translateY(calc(-50% + ${ -yValue * parseFloat(speedy)}px))`
        }
      })
    })
    }
    
  }
  
}
