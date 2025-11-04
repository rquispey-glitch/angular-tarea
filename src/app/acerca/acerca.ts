import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acerca',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acerca.html',
  styleUrl: './acerca.css'
})
export class Acerca {
  mostrarCaracteristicas = false;

  toggleCaracteristicas() {
    this.mostrarCaracteristicas = !this.mostrarCaracteristicas;
  }
}
