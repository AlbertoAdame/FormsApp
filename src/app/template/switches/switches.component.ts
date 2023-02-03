import { Component, OnInit } from '@angular/core';

interface Persona {
  genero: String;
  notificaciones: Boolean;
}

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent implements OnInit {

  persona: Persona = {
    genero: 'F',
    notificaciones: false
  };

  terminos: boolean = false;

  save(){
    console.log('Enviado');
  }
  
  constructor() { }

  ngOnInit(): void {
  }



}
