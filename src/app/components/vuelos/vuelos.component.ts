import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { VuelosService } from '../../services/vuelos.service';

import { Vuelo } from '../../models/vuelo.model';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.scss']
})
export class VuelosComponent implements OnInit {
  paises: string[];
  vuelo: Vuelo = new Vuelo();

  tiempo = {
    hora: 0,
    minutos: 0
  };

  constructor(
    public paisesService: PaisesService,
    public vuelosService: VuelosService
  ) {
    this.paises = paisesService.loadContries();
  }

  ngOnInit(): void {
  }

  agregarVuelo(): void {
    this.vuelo.tiempo = `${this.tiempo.hora} horas ${this.tiempo.minutos} minutos`;

    const id = this.vuelosService.save(this.vuelo);
    this.vuelo = new Vuelo();
    this.paises = this.paisesService.loadContries();
    this.tiempo.hora = 0;
    this.tiempo.minutos = 0;
    console.log(id);
  }
}
