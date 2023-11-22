import { Injectable } from '@angular/core';  // allows dependency injection into components
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({ 
  providedIn: 'root'
})
export class ProjectsService {  //COMPLETE THIS WITH REAL VALUES
  
  projects: Project[] = [
    { id: 0, name: 'Trucking App/RateVision.ai', pictures:["../../assets/morgan.jpeg", "../../assets/poly.png"], project_link: "//www.github.com/lmartin2422", summary: 'Test Description', description: '',  tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML, Tag.NODEJS, Tag.JAVASCRIPT]},
    { id: 1, name: 'Robotic Process Automation', pictures:["../../assets/morgan.jpeg", "../../assets/poly.png"], project_link: "//www.github.com/lmartin2422", summary: 'Test Description', description: '',  tags: [Tag.UIPATH, Tag.VBNET]},
    { id: 2, name: 'Notepad App', pictures:["../../assets/morgan.jpeg", "../../assets/poly.png"], project_link: "//www.github.com/lmartin2422", summary: 'Test Description', description: '',  tags: [Tag.PYTHON, Tag.HTML, Tag.FLASK]},
    { id: 3, name: 'Chrome Extension', pictures:["../../assets/morgan.jpeg", "../../assets/poly.png"], project_link: "//www.github.com/lmartin2422", summary: 'Test Description', description: '',  tags: [Tag.JAVASCRIPT, Tag.HTML]},
    { id: 4, name: 'Rest API', pictures:["../../assets/morgan.jpeg", "../../assets/poly.png"], project_link: "//www.github.com/lmartin2422", summary: 'Test Description', description: '',  tags: [Tag.JAVASCRIPT,Tag.EXPRESSJS, Tag.NODEJS ]},
    { id: 5, name: 'Student Database Backend', pictures:["../../assets/morgan.jpeg", "../../assets/poly.png"], project_link: "//www.github.com/lmartin2422", summary: 'Test Description', description: '',  tags: [Tag.JAVA, Tag.SPRINGBOOT]},
];

  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number) : Project { // will iterate through the projects and supply the project which matchs the id as a parameter
    let project = this.projects.find(project => project.id === id);

    if(project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id);
    }

    return project;

  }

  GetProjectByFilter(filterTags: Tag[]) {  // for the filter used in portfolio.html
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true;

      filterTags.forEach(function (filterTag) {
        if(project.tags.includes(filterTag) == false) {
          foundAll = false;
        }  
      });

      if (foundAll) {
        filteredProjects.push(project); 
      }
    });

    return filteredProjects;
  }
}