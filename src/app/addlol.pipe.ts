import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addlol'
})
export class AddlolPipe implements PipeTransform {
  transform(value: number, args?: any): any {
    return value + Math.random() * 100;
  }
}
