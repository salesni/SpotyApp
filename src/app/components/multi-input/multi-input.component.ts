import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-input',
  templateUrl: './multi-input.component.html',
  styles: [
  ]
})
export class MultiInputComponent implements OnInit {

  items: any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  array(number){
    var temp=[];
    for(var i=0;i<number; i++)
      temp.push(i);
    this.items=temp;
  }

}
