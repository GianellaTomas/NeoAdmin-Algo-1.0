import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nuevo-ticket',
  imports: [CommonModule, FormsModule],
  templateUrl: './nuevo-ticket.html',
  styleUrl: './nuevo-ticket.scss',
})
export class NuevoTicket {
  ticket: Ticket = {
    titulo: '',
    descripcion: '',
    activo_it: '',
    prioridad: 'media',
    usuario_email: ''
  };

  enviado = false;
  error = '';
  cargando = false;

  constructor(
    private ticketService: TicketService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  enviarTicket(): void {
    this.cargando = true;
    this.error = '';

    this.ticketService.crearTicket(this.ticket).subscribe({
      next: (respuesta: any) => {
        this.cargando = false;
        const data = typeof respuesta === 'string' ? JSON.parse(respuesta) : respuesta;
        if (data.success === true || data.success === 'true') {
          this.enviado = true;
          this.cdr.detectChanges(); // ← fuerza actualización de la vista
        } else {
          this.error = data.mensaje || 'Error al crear el ticket';
          this.cdr.detectChanges();
        }
      },
      error: (err) => {
        this.cargando = false;
        this.error = 'No se pudo conectar con el servidor';
        this.cdr.detectChanges();
      }
    });
  }

  volver(): void {
    this.router.navigate(['/home']);
  }
}
