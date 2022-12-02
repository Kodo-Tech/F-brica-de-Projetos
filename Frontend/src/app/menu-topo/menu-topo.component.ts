import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-menu-topo',
  templateUrl: './menu-topo.component.html',
  styleUrls: ['./menu-topo.component.css']
})
export class MenuTopoComponent implements OnInit {

  menusAuth: any = [
    { rota: "home", titulo: "Home" },
    // { rota: "login", titulo: "Login" },
    { rota: "perfil", titulo: "Perfil" },
    { rota: "doacoes", titulo: "Fazer doação" },
    { rota: "sobre-nos", titulo: "Sobre o projeto" },
    { rota: "login", titulo: "Sair" },
  ];

  menusNotAuth: any = [
    { rota: "home", titulo: "Home" },
    { rota: "sobre-nos", titulo: "Sobre o projeto" },
    { rota: "login", titulo: "Login" }
  ]
  
  autenticado: boolean;

  constructor(private loginComponent: LoginComponent) { }

  ngOnInit(): void {
    this.autenticado = this.loginComponent.autenticado;
  }

}
