import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit, AfterContentInit {

  input: any
  @Input() label: String
  @Input() errorMessage: String

  @ContentChild(NgModel) model: NgModel
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.input = this.model
    if(this.input === undefined){
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel')
    }
  }

}
