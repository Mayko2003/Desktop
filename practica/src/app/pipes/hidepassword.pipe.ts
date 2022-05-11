import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hidepassword'
})
export class HidepasswordPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    var aux : string = "";
    for(var i = 0; i < value.length; i++){
      aux += "*";
    }
    return aux;
  }

}
