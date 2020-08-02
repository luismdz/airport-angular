import { Injectable } from '@angular/core';
import { Vuelo } from '../models/vuelo.model';
import { Pasajero } from '../models/pasajero.model';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {
  private vuelos: Vuelo[] = [];
  flag: boolean;

  constructor() {

  }

  getVuelos(): Vuelo[] {
    if (localStorage.getItem('vuelos') === null) {
      this.vuelos = [];
    } else {
      this.vuelos = JSON.parse(localStorage.getItem('vuelos'));
    }
    return this.vuelos;
  }

  getVuelo(id: string): Vuelo {
    if (localStorage.getItem('vuelos') === null) {
      this.vuelos = [];
    } else {
      this.vuelos = JSON.parse(localStorage.getItem('vuelos'));
    }
    return this.vuelos.filter(v => v.id === id)[0];
  }

  private incrementId(): string {
    let lastIdx;

    if (this.getVuelos().length === 0) {
      lastIdx = 1;
    }
    lastIdx = this.getVuelos().length + 1;

    return `ABC-${lastIdx}`;
  }

  getPasajeros(id: string): Pasajero[] {
    let p: Pasajero[];

    const vuelos = this.getVuelos().filter(v => {
      if (v.id === id) {
        p = v.pasajeros;
      }
    });

    return p;
  }

  save(vuelo: Vuelo): string {

    if (localStorage.getItem('vuelos') === null) {
      this.vuelos = [];
    } else {
      this.vuelos = JSON.parse(localStorage.getItem('vuelos'));
    }

    this.vuelos.forEach((v, index) => {
      if (v.id === vuelo.id) {
        this.vuelos.splice(index, 1);
        this.actualizarVuelo(vuelo);
        return;
      }
    });

    if (!this.flag) {
      vuelo.id = this.incrementId();

      this.vuelos.push(vuelo);

      localStorage.setItem('vuelos', JSON.stringify(this.vuelos));
    }
    return vuelo.id;

  }

  actualizarVuelo(vuelo: Vuelo): void {
    this.vuelos.push(vuelo);

    localStorage.setItem('vuelos', JSON.stringify(this.vuelos));
    this.flag = true;
    // console.log(vuelo);
  }

}
