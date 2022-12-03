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
  titleShirt: string = "Camisa Food Share";
  titlePrize: string = "Brindes Food Share";

  constructor(private doadorService: DoadorService) { }

  ngOnInit(): void {
    this.buscarDoador();
  }
  buscarDoador() {
    this.doadorService.obterDoador(20).subscribe((data) => {
      this.doacoes = data['donations'];
      console.log(data['donations'][0]['created_at']);
      this.doador = data['name'];
      console.log(data['donations']);
    })
  }

  formataData(data: string) {
    var dateSplited = data.split('T')[0];
    const [year, month, day] = dateSplited.split('-') 
    const dateFormated = `${day}/${month}/${year}`;
    return dateFormated;
  }

}
