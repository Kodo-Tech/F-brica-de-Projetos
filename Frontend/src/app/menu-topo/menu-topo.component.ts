import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-topo',
  templateUrl: './menu-topo.component.html',
  styleUrls: ['./menu-topo.component.css']
})
export class MenuTopoComponent implements OnInit {

  menus: any = [
    { rota: "home", titulo: "Home" },
    { rota: "login", titulo: "Login" },
    { rota: "perfil", titulo: "Perfil" },
    { rota: "doacoes", titulo: "Fazer doação" },
    { rota: "sobre-nos", titulo: "Sobre o projeto" },
    { rota: "login", titulo: "Sair" },
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
