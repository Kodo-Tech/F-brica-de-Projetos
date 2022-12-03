import { Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DoacaoModalComponent } from './doacao-modal/doacao-modal.component';

@Component({
  selector: 'app-doacoes',
  templateUrl: './doacoes.component.html',
  styleUrls: ['./doacoes.component.css']
})
export class DoacoesComponent implements OnInit {

  constructor(public ngModal: NgbModal) { }

  ngOnInit(): void {
  }

  abrirModal() {
    const modalRef = this.ngModal.open(DoacaoModalComponent);
    modalRef.result.then(
      (result) => {//close

      },
      (reason) => {//dismiss

      },
    );
  }
}
