import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone : true,
  templateUrl: './login.html',
  imports: [CommonModule, FormsModule],
  styleUrl: './login.scss'
})
export class LoginComponent {
  // Atributos vinculados al HTML (Data Binding)
  public email = '';
  public password = '';
  public error = false;

  private url = 'http://localhost/api-tickets/auth.php';

  constructor(private http: HttpClient, private router: Router) {}

  iniciarSesion() {
    const body = { email: this.email, password: this.password, accion: 'login' };
    
    this.http.post(this.url, body).subscribe((res: any) => {
      if (res.status === 'success') {
        this.router.navigate(['/home']); // Navegación al Home
      } else {
        this.error = true;
      }
    });
  }

  irARegistro() {
  console.log('Navegando al registro...');
  this.router.navigate(['/registro']);
}
}