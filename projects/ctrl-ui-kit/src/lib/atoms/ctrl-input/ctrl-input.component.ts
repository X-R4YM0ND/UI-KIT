import { Component, input, model, ChangeDetectionStrategy } from '@angular/core';

/**
 * Input component with label, placeholder, and two-way binding support.
 * Uses signals for reactive state management.
 */
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
  
  // Reactive model signal for two-way binding
  value = model<string | number>('');

  // Update signal from DOM event
  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.value.set(inputElement.value);
  }
}