import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  changableText: string = ''; // Initialize changableText as an empty string
  changableColor: string = ''; // Initialize changableColor as an empty string

  wordList: string[] = ['create', 'craft', 'design', 'develop', 'explore'];
  colorList: string[] = [ '#33FF57', '#5733FF', '#FFD633', '#FF338A', '#333FFA']; // List of colors
  currentIndex: number = 0;
  
  scrollToBottom() {
    const slideshowContainer = document.querySelector('.slideshow-container') as HTMLElement;
  
    if (slideshowContainer) {
      const lastSlideContainer = slideshowContainer.querySelector('.slide-container:last-child') as HTMLElement;
  
      if (lastSlideContainer) {
        lastSlideContainer.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    }
  }
  
ngOnInit() {
  setInterval(() => {
    this.changeWord();
  }, 1000);
}


  changeWord() {
    if (this.currentIndex >= this.wordList.length) {
      this.currentIndex = 0; // Reset to the beginning of the list if we reach the end
    }

    this.changableText = this.wordList[this.currentIndex];
    this.changableColor = this.colorList[this.currentIndex]; // Set color based on currentIndex
    this.currentIndex++; // Move to the next word
  }

}
