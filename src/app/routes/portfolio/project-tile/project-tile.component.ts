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
  @Input() pixelated: boolean | undefined;
  @Input() tags: string[] = [];

  isHovered = false;

  toggleHover(isHovered: boolean) {
    this.isHovered = isHovered;
  }

  handleImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.parentElement?.classList.add('hidden');
  }

  getImageStyle() {
    if (this.pixelated) {
      return { 'image-rendering': 'pixelated' };
    } else {
      return {};
    }
  }
}

