import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  changableColor: string = ''; // Initialize changableColor as an empty string

  wordList: string[] = ['create', 'craft', 'design', 'develop', 'explore'];
  colorList: string[] = [ '#33FF57', '#5733FF', '#FFD633', '#FF338A', '#333FFA']; // List of colors
  wordIndex: number = 0;
  charIndex = 0;
  typedText = "";
  pipe = "|";
  currentWord = "";

  scrollKevSlower() {
    const kev = document.querySelector('.kev') as HTMLElement;
    const slide = document.querySelector('.slide-container') as HTMLElement;
  
    if (kev && slide) {

    const slideRect = slide.getBoundingClientRect();

    kev.style.top = `${- slideRect.top / 5}px`;

    }
  }
  
  ngOnInit() {
    this.typeWord();
    this.timertjeTikje();
  
    // Call scrollKev every 100 milliseconds (adjust the interval as needed)
    setInterval(() => {
      this.scrollKevSlower();
    }, 10);
  }


  typeWord(){
    this.changableColor = this.colorList[this.wordIndex];
    if (this.wordIndex < this.wordList.length) {
      this.currentWord = this.wordList[this.wordIndex];
      if (this.charIndex < this.currentWord.length) {
        this.typedText += this.currentWord.charAt(this.charIndex);
        this.charIndex++;
        setTimeout(()=> this.typeWord(), 180)
      }
      else {
        setTimeout(()=> this.deleteWord(), 500)
      }
    }
    else{
      this.wordIndex = 0;
      this.typeWord();
    }
  }

  deleteWord(){
    if (this.charIndex > 0) {
      this.typedText = this.currentWord.slice(0, this.charIndex - 1);
      this.charIndex--;
      setTimeout(()=> this.deleteWord(), 120)
    }
    else {
      this.wordIndex++;
      this.charIndex = 0;
      setTimeout(()=> this.typeWord(), 100)
    }
  }

  timertjeTikje() {
    setTimeout(() => {
      this.pipe = "|";
      setTimeout(() => {
        this.pipe = "\u00A0";
        this.timertjeTikje();
      }, 500);
    }, 500);
  }
}

