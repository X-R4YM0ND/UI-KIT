import { Component, input, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommandPersonality } from './ctrl-icons.constants';

/**
 * Animated icon component with different personalities.
 * Supports tap animation and dynamic styling based on personality.
 */
@Component({
  selector: 'lib-ctrl-icon',
  imports: [],
  templateUrl: './ctrl-icon.component.html',
  styleUrl: './ctrl-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CtrlIconComponent {
  personality = input.required<CommandPersonality>();
  
  isTapped = signal(false);

  triggerAnim() {
    if (this.isTapped()) return;
    
    this.isTapped.set(true);
    setTimeout(() => this.isTapped.set(false), 600);
  }
}