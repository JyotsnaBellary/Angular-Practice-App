import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent {
  @Output() ChildOneDataEmit = new EventEmitter<string>();

  onClick(){
    this.ChildOneDataEmit.emit("Child One Data emitting now. This is the line emitted.")
  }
}
