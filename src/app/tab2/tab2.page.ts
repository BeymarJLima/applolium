import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit  {
  nome: any;
  nombre: any;
  email: any;
  mail: any;
  senha: any;
  Confsenha: any;
  endereco: any;
  enderec: any;  

  constructor() {}

  ngOnInit() {

  }

  cadastrar() {
    this.nome = this.nombre;
    this.email = this.mail;
    this.endereco = this.enderec;
  }

}
