import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.css']
})
export class ProjectTileComponent {
  @Input() imageUrl: string | undefined;
  @Input() projectTitle: string | undefined;
  @Input() projectDescription: string | undefined;
  @Input() textColor: string | undefined;
  @Input() tags: string[] = []; // Add this line for tags input property

  isHovered = false;

  toggleHover(isHovered: boolean) {
    this.isHovered = isHovered;
  }
  
  handleImageError(event: Event) {
    // This function will be called if the image fails to load
    // You can implement any behavior you want here, for example, hide the container
    const imgElement = event.target as HTMLImageElement;
    imgElement.parentElement?.classList.add('hidden'); // Add a 'hidden' class to hide the container
  }
}
