import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {


  public cadastroForm: FormGroup = this.formBuilder.group({
    primeiroNome: ['', Validators.required],
    segundoNome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder){
  }

  public submitForm(){

    if(this.cadastroForm.valid){
      console.log(this.cadastroForm.value);
    } 
  }
}
