import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  notValid(campo:string):boolean{
    return this.myForm?.controls[campo]?.invalid &&
            this.myForm?.controls[campo]?.touched;
  }


  save() {
    console.log('formulario posteado');
  }

}
