import { Persona } from "./persona"

export class Pasaje {
    id!: string
    precioPasaje!: number
    categoriaPasaje!: string
    fechaCompra!: string
    pasajero!: Persona
}
