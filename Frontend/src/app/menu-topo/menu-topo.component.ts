import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-topo',
  templateUrl: './menu-topo.component.html',
  styleUrls: ['./menu-topo.component.css']
})
export class MenuTopoComponent implements OnInit {

  menus: any = [
    { rota: "home", titulo: "Home" },
    { rota: "perfil", titulo: "Perfil" },
    { rota: "sobre-nos", titulo: "Sobre nós" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
