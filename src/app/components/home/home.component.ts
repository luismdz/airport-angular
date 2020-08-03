import { Component, OnInit } from '@angular/core';
import { VuelosService } from '../../services/vuelos.service';
import { PaisesService } from '../../services/paises.service';
import { Router } from '@angular/router';

import { Vuelo } from 'src/app/models/vuelo.model';
import { Pasajero } from 'src/app/models/pasajero.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  vuelos: Vuelo[];
  paises: string[];

  pasajeroAgregado = false;

  vuelo: Vuelo = new Vuelo();

  constructor(
    public vuelosService: VuelosService,
    public paisesService: PaisesService,
    public router: Router
  ) {
    this.vuelos = vuelosService.getVuelos();
    this.paises = this.vuelos.map(v => v.paisDestino);
  }

  ngOnInit(): void {
  }

  getVuelosPorPais(pais: string): void {
    this.vuelos = this.vuelosService.getVuelos();
    this.vuelos = this.vuelos.filter(v => v.paisDestino === pais);
  }

  getDataVuelo(id: string): void {
    if (id !== null) {
      this.vuelo = this.vuelosService.getVuelo(id);
    }
  }

  obtener(pasajeros: Pasajero[]): void {
    this.vuelo.pasajeros = pasajeros;
    this.pasajeroAgregado = true;
  }

  registrar(): void {
    if (this.vuelo.pasajeros !== null) {
      console.log(this.vuelo);
      this.vuelosService.save(this.vuelo);

      this.router.navigate(['details', 'vuelo'], { queryParams: this.vuelo });
    }

  }
}
