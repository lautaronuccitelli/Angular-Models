import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-turno',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './crear-turno.html',
})
export class CrearTurnoComponent {
  turno = {
    idUsuario: 0,
    observacion: ''
  };

  crearTurno() {
    console.log('Turno cargado:', this.turno);
  }
}
