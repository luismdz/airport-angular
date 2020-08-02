import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { VuelosService } from '../../services/vuelos.service';
import { Vuelo } from 'src/app/models/vuelo.model';
import { Pasajero } from 'src/app/models/pasajero.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  vuelos: Vuelo[];
  vuelo: Vuelo = new Vuelo();

  constructor(
    public vuelosService: VuelosService
  ) {
    this.vuelos = vuelosService.getVuelos();
  }

  ngOnInit(): void {
  }

  getDataVuelo(id: string): void {
    if (id !== null) {
      this.vuelo = this.vuelosService.getVuelo(id);
    }
  }

  obtener(pasajeros: Pasajero[]): void {
    this.vuelo.pasajeros = pasajeros;
  }

  registrar(): void {
    if (this.vuelo.pasajeros !== null) {
      console.log(this.vuelo);
      this.vuelosService.save(this.vuelo);
    }
  }
}
