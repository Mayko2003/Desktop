export class Usuario {
    static id = 0;
    id: number;
    nombreUsuario!: string;
    nombre!: string;
    apellido!: string;
    email!: string;
    password!: string;
    fechaCreacion: Date;
    estado!: boolean;

    constructor() {
        this.id = ++Usuario.id;
        this.fechaCreacion = new Date();
    }
}
