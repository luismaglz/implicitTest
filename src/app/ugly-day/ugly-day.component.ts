import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ugly-day',
  templateUrl: './ugly-day.component.html',
  styleUrls: ['./ugly-day.component.css']
})
export class UglyDayComponent implements OnInit {
  @Input()
  date: number;

  constructor() {}

  ngOnInit() {}
}
