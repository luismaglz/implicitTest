import {
  Component,
  OnInit,
  ContentChild,
  TemplateRef,
  ComponentRef
} from '@angular/core';
import { ItemDirective } from '../item.directive';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ContentChild(ItemDirective, { read: TemplateRef }) itemTemplate;

  public days: number[] = [1, 2, 3, 4, 5, 6];

  constructor() {}

  ngOnInit() {}
  addToList() {
    this.days = [...this.days, this.days.length + 1];
  }
}
