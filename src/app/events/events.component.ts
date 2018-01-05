import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-up',
  template: `
    <p>
      {{value}}
    </p>
    <input #box (keyup) = "onKey(box.value)" focus= "onKey(box.value)" [ngModel]="personal || 'defaultValue'">
    {{2}}
  `,
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  value : string;
  constructor() { }

  ngOnInit() {
  }

  onKey(val:string){
    this.value = val;
  }

}
