import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sFilter'
})
export class SFilterPipe implements PipeTransform {

  transform(list : any[] , ft:string): any {
    return list ? list.filter( i =>
      i.nom.toLowerCase().includes(ft)):[] ;
  }

}
