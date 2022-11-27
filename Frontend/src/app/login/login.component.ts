import { Component, OnInit } from '@angular/core';
import { DoadorService } from '../services/doador-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  id: number; 
  senha: string;
  autenticado: boolean;
  
  constructor(public doadorService: DoadorService) { }
  cadastro: any = [{ rota:"cadastro", titulo: "cadastro" }]
 
  ngOnInit(): void {
    
  }

  login() {
    var doador: any;
    if(!this.email || !this.senha) {
      alert("Por favor, preencha os dois campos.");
    }
    if(this.id) {
      doador = this.doadorService.obterDoador(this.id).subscribe((data: any) => {
        console.log(data[0].id);
      });
    }
    else if(this.email && this.senha) {
      try {
        this.doadorService.obterDoador(undefined, this.email).subscribe((data: any) => {
          if(this.email != null && this.senha != null && data.length <= 0) {
            alert('Email e senha incorretos!');
            return;
          }
          else if(this.email == data[0].email && this.senha != data[0].password) {
            alert('Senha incorreta!');
            return;
          }
        });
      } catch(err) {
        console.log("Doador não encontrado.");
      }
    }
  }

}
