export class Pelicula {
   id!: string;
   titulo!: string;
   rating!: number;
   generos!: string[];
   descripcion!: string;
   image!: string;
   duracion!:string

    constructor(id: string, titulo: string, image: string, descripcion: string, generos: string[], rating: number, runtime:string) {
        this.id = id;
        this.titulo = titulo;
        this.image = image;
        this.descripcion = descripcion;
        this.generos = generos;
        this.rating = rating;
        this.duracion = runtime;
    }

}
