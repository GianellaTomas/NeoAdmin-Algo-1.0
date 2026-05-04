import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

 constructor(private router: Router) {}

irAArticulo(id: string): void {
  this.router.navigate(['/articulo', id]);
}

}
