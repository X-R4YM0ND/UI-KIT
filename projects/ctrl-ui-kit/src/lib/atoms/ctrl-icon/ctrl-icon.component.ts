import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandPersonality } from './ctrl-icons.constants';

@Component({
  selector: 'lib-ctrl-icon',
  imports: [CommonModule],
  templateUrl: './ctrl-icon.component.html',
  styleUrl: './ctrl-icon.component.scss'
})
export class CtrlIconComponent {
  // Recibe la personalidad (cash-lick, task-done, etc.)
  personality = input.required<CommandPersonality>();
  
  // Estado interno para la animación de "tap"
  isTapped = signal(false);

  triggerAnim() {
    if (this.isTapped()) return;
    
    this.isTapped.set(true);
    // Reset de la animación después de 600ms
    setTimeout(() => this.isTapped.set(false), 600);
  }
}