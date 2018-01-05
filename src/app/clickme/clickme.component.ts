import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clickme',
  template: `
    <p>
    {{ClientName}}
         clickme works!
    </p>
    <input #test />
    <button (click)="clickmenow(test.value)">clickmenow </button>
  `,
  styleUrls: ['./clickme.component.css']
})
export class ClickmeComponent implements OnInit {
  ClientName = "GK";
  constructor() { 
    this.ClientName = "Ashok kumar";
  }

  ngOnInit() {
  }

  clickmenow(str:string):void{
    alert(str);
  }
}
