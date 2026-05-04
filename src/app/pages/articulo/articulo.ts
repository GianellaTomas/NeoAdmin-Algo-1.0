import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Articulo } from '../../models/articulo.interface';

@Component({
  selector: 'app-articulo',
  imports: [CommonModule],
  templateUrl: './articulo.html',
  styleUrl: './articulo.scss'
})
export class ArticuloComponent implements OnInit {

  articulo: Articulo | null = null;

  private articulos: Articulo[] = [
    {
      id: 'reset-password',
      titulo: 'Cómo resetear la contraseña de red',
      contenido: `Para resetear tu contraseña de red seguí estos pasos:
      1. Ingresá al portal de IT en http://portal.interno
      2. Hacé clic en "Olvidé mi contraseña"
      3. Ingresá tu email corporativo
      4. Revisá tu casilla y seguí el link
      5. Creá una nueva contraseña de mínimo 8 caracteres
      Si el problema persiste, abrí un ticket con soporte L1.`
    },
    {
      id: 'vpn-home',
      titulo: 'Configuración de VPN para Home Office',
      contenido: `Para configurar la VPN desde tu casa:
      1. Descargá el cliente VPN desde el portal de IT
      2. Instalalo y abrilo
      3. Ingresá el servidor: vpn.empresa.com
      4. Usá tus credenciales corporativas
      5. Aceptá el certificado de seguridad
      Ante cualquier problema contactá a soporte.`
    },
    {
      id: 'angular-cli',
      titulo: 'Guía de instalación de Angular CLI',
      contenido: `Para instalar Angular CLI en tu equipo:
      1. Asegurate de tener Node.js instalado (v18 o superior)
      2. Abrí una terminal como administrador
      3. Ejecutá: npm install -g @angular/cli
      4. Verificá la instalación con: ng version
      5. Creá tu primer proyecto con: ng new mi-proyecto
      Ante cualquier error revisá que Node.js esté en el PATH.`
    },
    {
      id: 'rx5700',
      titulo: 'Problemas comunes con RX 5700 XT',
      contenido: `Soluciones para problemas frecuentes con la RX 5700 XT:
      1. Pantalla negra: actualizá los drivers desde amd.com
      2. Temperatura alta: limpiá el polvo del cooler
      3. Artefactos visuales: verificá que el cable DisplayPort esté bien conectado
      4. Crashes en juegos: bajá el overclock en AMD Software
      Si ninguna solución funciona, abrí un ticket de hardware.`
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.articulo = this.articulos.find(a => a.id === id) || null;
  }

  volver(): void {
    this.router.navigate(['/home']);
  }
}