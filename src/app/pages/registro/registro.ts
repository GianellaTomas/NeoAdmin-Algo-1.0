import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.html',
  styleUrl: '../login/login.scss' // Reutilizamos el CSS del login para no repetir código
})
export class Registro {
  public email = '';
  public password = '';
  public mensaje = '';

  private url = 'http://localhost/api-tickets/auth.php';

  constructor(private http: HttpClient, private router: Router) {}

  guardarUsuario() {
    // Validamos que los campos no estén vacíos (Análisis de Sistemas: Validación en el cliente)
    if (!this.email || !this.password) {
      this.mensaje = 'Por favor, completá todos los campos.';
      return;
    }

    const body = { 
      email: this.email, 
      password: this.password, 
      accion: 'registro' 
    };

    this.http.post(this.url, body).subscribe({
      next: (res: any) => {
        if (res.res === 'ok') {
          alert('¡Usuario creado correctamente!');
          this.router.navigate(['/']); // Redirigir al login
        }
      },
      error: (err) => {
        console.error('Error en la conexión:', err);
        this.mensaje = 'Error al conectar con el servidor.';
      }
    });
  }

  volver() {
    this.router.navigate(['/']);
  }
}