export class Noticia {
    titulo!: string
    img!: string
    noticia!: string

    constructor(titulo:string = "", img:string = "", noticia:string = ""){
        this.titulo = titulo
        this.img = img
        this.noticia = noticia
    }
}
