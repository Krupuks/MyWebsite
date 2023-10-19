import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service'

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent {
  useScheme = false;
  jsColor = 'rgb(0, 46, 51)';

  constructor(private scrollService: ScrollService ) {}

  ngOnInit(){
    //this.scrollService.moveWithMouse();
  }
}
