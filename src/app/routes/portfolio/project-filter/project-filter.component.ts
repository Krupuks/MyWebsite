import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-filter',
  templateUrl: './project-filter.component.html',
  styleUrls: ['./project-filter.component.css']
})
export class ProjectFilterComponent implements OnInit {

  @Output() filterChange = new EventEmitter<string[]>();
  @Input() allTags: string[] = []; // Add this line

  selectedTags: string[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe((data: any[]) => {
      this.allTags = [...new Set(data.flatMap(project => project.tags))];
      this.filterProjects();
    });
  }

  //TOGGLES JUST THE BUTTON
  toggleFilter(tag: string) {
    if (this.selectedTags.includes(tag)) {
      this.selectedTags = this.selectedTags.filter(t => t !== tag);
    } else {
      this.selectedTags.push(tag);
    }
    this.filterProjects();
  }
  

  private filterProjects() {
    if (this.selectedTags.length === 0) {
      this.filterChange.emit([]);
    } else {
      this.filterChange.emit(this.selectedTags);
    }
  }
}
