import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-kev',
  templateUrl: './kev.component.html',
  styleUrls: ['./kev.component.css']
})
export class KevComponent implements AfterViewInit {
  ngAfterViewInit() {
    const subtitles = document.querySelectorAll('.text') as NodeListOf<HTMLElement>;

    const targetOpacities = [0.8, 0.6, 0.4, 0.2];
    let index = 0;

    function fadeInText() {
      if (index < subtitles.length) {
        subtitles[index].style.opacity = String(targetOpacities[index]);
        index++;
        setTimeout(fadeInText, 1000); // Adjust the time (in milliseconds) for the fade-in effect
      }
    }

    setTimeout(fadeInText, 500);
  }
}
