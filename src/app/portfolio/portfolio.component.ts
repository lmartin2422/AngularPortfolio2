import { ProjectsService } from './../_services/projects.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];

  isCollapsed: boolean = true;
  filtering: boolean = false;
  typescript: boolean = false;
  angular: boolean = false;
  flask: boolean = false;
  html: boolean = false;
  javascript: boolean = false;
  java: boolean = false;
  uipath: boolean = false;
  springboot: boolean = false;
  vbnet: boolean = false;
  expressjs: boolean = false;
  nodejs: boolean = false;
  python: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService) { // whenever this component is loaded, title below shows
    this.titleService.setTitle("Leonard Martin - Portfolio");
   }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter() {  // for the options in the filter
    let filterTags: Tag[] =[];

    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR); 
    }
    if (this.flask) {
      filterTags.push(Tag.FLASK);
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if (this.java) {
      filterTags.push(Tag.JAVA);
    }
    if (this.springboot) {
      filterTags.push(Tag.SPRINGBOOT);
    }
    if (this.expressjs) {
      filterTags.push(Tag.EXPRESSJS);
    }
    if (this.nodejs) {
      filterTags.push(Tag.NODEJS);
    }
    if (this.html) {
      filterTags.push(Tag.HTML);
    }
    if (this.uipath) {
      filterTags.push(Tag.UIPATH);
    }
    if (this.vbnet) {
      filterTags.push(Tag.VBNET);
    }
    if (this.python) {
      filterTags.push(Tag.PYTHON);
    }

    // RESET LOGIC
    if (this.python || this.angular || this.expressjs || this.flask || this.html || this.java || this.javascript || this.nodejs ||
      this.springboot || this.typescript || this.uipath || this.vbnet) { 
        this.filtering = true;
    }

    else {
      this.filtering = false;
    }



    this.projects = this.projectService.GetProjectByFilter(filterTags);
  }

  ResetFilters() {
    this.angular = false;
    this.expressjs = false;
    this.flask = false;
    this.nodejs = false;
    this.python = false;
    this.java = false;
    this.vbnet = false;
    this.javascript = false;
    this.typescript = false;
    this.html = false;
    this.springboot = false;
    this.uipath = false;
    this.filtering = false

    this.projects = this.projectService.GetProjects(); // gets all the projects
  }

}