import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({ 
  selector: 'doacao-modal-component', 
  templateUrl: './doacao-modal.component.html',
  styleUrls: ['./doacao-modal.component.css'] 
})
export class DoacaoModalComponent {
  @Input() name: any;
	constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) {}
}