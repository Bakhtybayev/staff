import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-authorization',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './authorization.page.html',
  styleUrl: './authorization.page.scss',
})
export class AuthorizationPage {
  constructor() {}

  login() {
    // Here you can implement your login logic
    // For demonstration, let's just log the form values
    console.log('Login form submitted!');
  }
}
