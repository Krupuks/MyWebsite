import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  allTags = ['development', 'art', 'design'];
  projects: any[] = [];
  filteredProjects: any[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe((data) => {
      this.projects = data as JSON[];
      this.filteredProjects = [...this.projects]; // Initialize filteredProjects with all projects
    });
  }

  applyFilter(selectedTags: string[]) {
    selectedTags = selectedTags.map(tag => tag.toLowerCase());
  
    console.log('Selected Tags:', selectedTags);
  
    this.filteredProjects = selectedTags.length === 0
      ? [...this.projects]
      : this.projects.filter(project =>
          selectedTags.every(tag => project.tags.includes(tag.toLowerCase()))
        );
  
    console.log('Filtered Projects:', this.filteredProjects);
  }
  
}
