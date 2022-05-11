import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../models/usuario';

@Pipe({
  name: 'sortusername'
})
export class SortUsernamePipe implements PipeTransform {

  transform(value: Array<Usuario>, orden:string ,...args: unknown[]): Array<Usuario> {
    if(orden == '-') return value;
    var aux : Array<Usuario> = new Array<Usuario>();
    value.forEach(element => aux.push(element));

    if(orden == "↑") return aux.sort((a,b) => a.nombreUsuario.localeCompare(b.nombreUsuario));
    return aux.sort((a,b) => b.nombreUsuario.localeCompare(a.nombreUsuario));
  }

}
