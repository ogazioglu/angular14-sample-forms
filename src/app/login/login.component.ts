import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidatableFormGroup } from '../validatable-form-group';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class LoginComponent implements OnInit {
  v: ValidatableFormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.v = new ValidatableFormGroup(
      this.fb.group({
        username: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(3)]],
        rememberMe: [false],
      })
    );
  }
}
