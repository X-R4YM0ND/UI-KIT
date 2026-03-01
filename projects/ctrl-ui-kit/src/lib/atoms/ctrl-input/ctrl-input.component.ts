import { Component, input, model, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lib-ctrl-input',
  imports: [],
  templateUrl: './ctrl-input.component.html',
  styleUrls: ['./ctrl-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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