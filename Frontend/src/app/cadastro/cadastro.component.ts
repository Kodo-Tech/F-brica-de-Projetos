import { Component, OnInit } from '@angular/core';
import { DoadorService } from '../services/doador-service.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  nome: string;
  email: string;
  senha: string;
  telefone: string;

  constructor(private doadorService: DoadorService) { }

  ngOnInit(): void {
  }

  cadastrarDoador() {
    if(!this.nome || !this.email || !this.senha || !this.telefone) {
      alert("Por favor, preencha todos os dados!");
    } else {
      const doador = {
        name: this.nome,
        email: this.email,
        password: this.senha,
        phone: this.telefone
      }
      try {
        this.doadorService.cadastrarDoador(doador).subscribe(() => {
          alert("Doador salvo com sucesso!")
        });
      }
      catch(erro) {
        alert(erro);
      }
    }
  }

}
