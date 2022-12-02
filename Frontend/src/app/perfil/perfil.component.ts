import { Component, OnInit } from '@angular/core';
import { DoadorService } from '../services/doador-service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  doacoes: any = [];
  doador: any;

  constructor(private doadorService: DoadorService) { }

  ngOnInit(): void {
    this.buscarDoador();
  }

  buscarDoador() {
    this.doadorService.obterDoador(1).subscribe((data) => {
      this.doacoes = data['donations'];
      this.doador = data['name'];
      console.log(data['donations']);
    })
  }

}
