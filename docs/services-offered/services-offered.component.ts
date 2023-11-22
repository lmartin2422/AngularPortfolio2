import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-services-offered',
  templateUrl: './services-offered.component.html',
  styleUrls: ['./services-offered.component.css']
})
export class ServicesOfferedComponent {
  constructor(private titleService: Title) { // whenever this component is loaded, title below shows
    this.titleService.setTitle("Leonard Martin - Services");
   }

}