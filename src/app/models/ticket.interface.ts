export interface Ticket {
  id?: number;
  titulo: string;
  descripcion: string;
  activo_it: string;
  prioridad: string;
  estado?: string;
  usuario_email: string;
}