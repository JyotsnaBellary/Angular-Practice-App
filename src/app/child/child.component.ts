import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() dataFromParent: string | undefined;

  @Output() colorSelected = new EventEmitter<string>();

  onSelect(color:string){
    this.colorSelected.emit(color);
  }
}
