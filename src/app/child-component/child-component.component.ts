import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent {
 @Input() frase!: string
  @Output() outputEvent: EventEmitter<string> = new EventEmitter<string>()
  emitOutputEvent(){
   this.outputEvent.emit(this.frase=this.frase+" modificacion")
  }
}
