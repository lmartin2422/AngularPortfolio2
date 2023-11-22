import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesOfferedComponent } from './services-offered/services-offered.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from './project-modal/project-modal.component'  // for the popup modals
import { CarouselModule } from 'ngx-bootstrap/carousel'; // for slides of pics in the popup modal
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [ // contains all of the components generated for this project
    AppComponent, 
    HeaderComponent, 
    NavComponent, 
    HomeComponent, 
    PortfolioComponent, 
    ContactComponent, 
    ServicesOfferedComponent, 
    ProjectCardComponent, 
    ProjectModalComponent
  ],

  imports: [  // contains all of the modules that were imported in the project
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }