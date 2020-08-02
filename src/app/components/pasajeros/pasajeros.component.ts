import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Pasajero } from 'src/app/models/pasajero.model';

@Component({
  selector: 'app-pasajeros',
  templateUrl: './pasajeros.component.html',
  styleUrls: ['./pasajeros.component.scss']
})
export class PasajerosComponent implements OnInit {
  nuevo = true;
  pasajero: Pasajero = new Pasajero();
  pasajeros: Pasajero[] = [];

  @Input() mostrarLista: boolean;
  @Output() pasajeroAgregado = new EventEmitter<Pasajero[]>();

  constructor() {
    // this.pasajeros.push(
    //   new Pasajero(
    //     'Luis',
    //     'Mendez',
    //     'prueba@prueba.com',
    //     23
    //   )
    // );
  }

  ngOnInit(): void {
  }

  agregarPasajero(): void {
    const { firstName, lastName, age, email } = this.pasajero;
    console.log(firstName, lastName, age, email);
    if (
      firstName === null ||
      lastName === null ||
      email === null ||
      age === null
    ) {

    } else {
      this.pasajeros.push(this.pasajero);
      this.enviarPasajeros();
      this.pasajero = new Pasajero();
      this.nuevo = !this.nuevo;
    }
  }

  eliminar(idx) {
    this.pasajeros.splice(idx, 1);
  }

  enviarPasajeros(): void {
    this.pasajeroAgregado.emit(this.pasajeros);
  }

}
