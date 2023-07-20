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
    segundoNome: [''],
  });

  constructor(private formBuilder: FormBuilder){
  }

  public submitForm(){
    console.log(this.cadastroForm.value);
  }
}
