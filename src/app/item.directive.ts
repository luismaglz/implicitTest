import { Directive } from '@angular/core';

@Directive({
  selector: '[appItem]'
})
export class ItemDirective {
  public name: string;
  public age: number;

  constructor() {}
}
