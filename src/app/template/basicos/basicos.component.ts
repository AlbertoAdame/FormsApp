import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  initForm = {
    producto: "default",
    precio:0,
    existencias:10
  }

  constructor() { }

  ngOnInit(): void {
    
  }

  notValidName(): boolean{
    return this.myForm?.controls['producto']?.invalid &&
      this.myForm?.controls['producto']?.touched
  }

  notValid(campo:string): boolean{
    return this.myForm?.controls[campo]?.invalid &&
      this.myForm?.controls[campo]?.touched
  }
  save() {
    // this.myForm.resetForm();

    this.myForm.resetForm({
      precio:0,
      existencias:10
    })

  }


}
