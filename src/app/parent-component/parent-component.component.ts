import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.css'
})
export class ParentComponentComponent {
  frase: string="Soy el padre comunicandome con el hijo"
  receivedValue: string = '';

  // Método que maneja el evento recibido
  handleOutputEvent(value: string) {
    this.receivedValue = value;
  }
}
