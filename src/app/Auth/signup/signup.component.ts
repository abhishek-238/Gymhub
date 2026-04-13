import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule,RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
signupForm= new FormGroup({
name: new FormControl('',[Validators.required]),
email: new FormControl('',[Validators.required,Validators.email]),
password: new FormControl('',[Validators.required,Validators.minLength(6)])
});
onSubmit(){
  console.log(this.signupForm.value);
}
}
