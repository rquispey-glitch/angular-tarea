import { Component } from '@angular/core';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css'
})
export class Tareas {
  tareas: { texto: string; completada: boolean }[] = [];
  nuevaTarea = '';

  agregarTarea() {
    if (this.nuevaTarea.trim()) {
      this.tareas.push({ texto: this.nuevaTarea.trim(), completada: false });
      this.nuevaTarea = '';
    }
  }

  completarTarea(index: number) {
    this.tareas[index].completada = !this.tareas[index].completada;
  }

  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
  }
}
