import { Component, OnInit } from '@angular/core';
import {EventEmitter}  from '@angular/core'
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs:['parentdata'],
  outputs:['childEvent']

})
export class ChildComponent implements OnInit {
  public parentdata:string;
  childEvent=new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  onChange(value:String)
  {
    this.childEvent.emit(value)
  }

}
