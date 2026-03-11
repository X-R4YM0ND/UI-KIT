import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Button component with multiple variants and icon support.
 * Uses OnPush change detection for performance.
 */
@Component({
  selector: 'lib-ctrl-button',
  templateUrl: './ctrl-button.component.html',
  styleUrls: ['./ctrl-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CtrlButtonComponent {

  variant = input <'primary' | 'secondary' | 'tertiary' | 'quarter'>('primary') 
  useAccentIcon = input<boolean>(false);
}
