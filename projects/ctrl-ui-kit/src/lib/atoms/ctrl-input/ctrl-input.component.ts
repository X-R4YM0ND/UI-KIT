import { Component, input, model } from '@angular/core';

@Component({
  selector: 'lib-ctrl-input',
  standalone: true,
  imports: [], // ¡Mira mamá, sin FormsModule!
  templateUrl: './ctrl-input.component.html',
  styleUrls: ['./ctrl-input.component.scss'],
})
export class CtrlInputComponent {
  label = input<string>('');
  placeholder = input<string>('');
  type = input<'text' | 'number' | 'password' | 'email'>('text');
  
  // Definimos el modelo como una señal reactiva
  value = model<string | number>('');

  // Función para actualizar la señal desde el evento del DOM
  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.value.set(inputElement.value);
  }
}