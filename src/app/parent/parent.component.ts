import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  dataFromParent = 'this string is passed from parent to child'
  color = 'red'
  childOneData !: string;
  @Output() ChildTwoDataEmit = new EventEmitter<string>();

  changeColor(color:string){
    this.color = color
  }
  getDataFromChildOne(Line: string){
    this.childOneData = Line;
    this.ChildTwoDataEmit.emit(this.childOneData)
  }
}
