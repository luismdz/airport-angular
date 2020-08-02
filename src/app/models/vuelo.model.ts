import { Pasajero } from './pasajero.model';

export class Vuelo {

    constructor(
        public id: string = null,
        public paisDestino: string = null,
        public horaSalida: number = null,
        public tiempo: string = null,
        public pasajeros: Pasajero[] = null
    ) { }
}
