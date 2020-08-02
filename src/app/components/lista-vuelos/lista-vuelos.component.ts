import { Component, OnInit } from '@angular/core';
import { VuelosService } from 'src/app/services/vuelos.service';
import { Vuelo } from 'src/app/models/vuelo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-vuelos',
  templateUrl: './lista-vuelos.component.html',
  styleUrls: ['./lista-vuelos.component.scss']
})
export class ListaVuelosComponent implements OnInit {
  vuelos: Vuelo[];

  constructor(
    public vuelosService: VuelosService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.cargarInformacion();
  }

  cargarInformacion(): void {
    this.vuelos = [];

    this.vuelos = this.vuelosService.getVuelos().filter(v => v.pasajeros !== null);

    console.log(this.vuelos);
  }

  verDetalle(vuelo: Vuelo): void {
    console.log(vuelo);
    this.router.navigate(['details', 'vuelo'], { queryParams: vuelo });
  }

}
