import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  featuredProject = {} as Project;
 // below is part of the "service" feature
  constructor(private titleService: Title, private projectService: ProjectsService) { // whenever this component is loaded, title below shows
  this.titleService.setTitle("Leonard Martin - Home");
 }
  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(0);  // the parameter is id number 0
  }

}