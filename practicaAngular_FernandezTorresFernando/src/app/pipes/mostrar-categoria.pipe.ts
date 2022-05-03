import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostrarCategoria'
})
export class MostrarCategoriaPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if(value == "m") return "Menor"
    else if(value == "a") return "Adulto"
    else return "Jubilado"
  }

}
