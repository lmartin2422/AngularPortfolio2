import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';  // for popup modals
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project = {} as Project;  //allows you to input or change a name in the html
  bsModalRef?: BsModalRef; // the ? makes the modal optional

  constructor(private modalService: BsModalService) {  // this service provides functinality to open & close a modal


  }

  OpenProjectModal() {
    const modalOptions: ModalOptions = { // ModalOptions class lets us define properties for our Modal ex: input data
      class: "modal-lg",  // makes the modal wider
      initialState: {  // allows us to initialize properties of the modal component ex: project variable
        project: this.project  // taking the input and passing it to the modal

      }

    }


    this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOptions);  // shows the HTML from the ProjectModalComponent
  }

}