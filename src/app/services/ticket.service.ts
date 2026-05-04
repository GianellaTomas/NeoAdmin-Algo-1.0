import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket.interface';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiUrl = 'http://localhost/api-tickets/neoadmin/crear_ticket.php';

  constructor(private http: HttpClient) {}

  crearTicket(ticket: Ticket): Observable<any> {
  return this.http.post(this.apiUrl, ticket, { responseType: 'text' });
}
}