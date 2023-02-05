import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() textoAmostrar: string;
  @Input() color: string;
  @Output() btnClick = new EventEmitter();

  onClick () {
    console.log('Esto salió del button: Add');
    this.btnClick.emit();
  }

}
