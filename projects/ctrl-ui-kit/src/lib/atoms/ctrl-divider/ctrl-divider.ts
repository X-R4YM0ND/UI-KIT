import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Visual divider component for horizontal or vertical layouts.
 * Supports customization of color, thickness, line type, and alignment.
 */
@Component({
  selector: 'lib-ctrl-divider',
  imports: [],
  templateUrl: './ctrl-divider.html',
  styleUrl: './ctrl-divider.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtrlDivider {
  /**
   * Additional CSS class for the divider.
   */
  styleClass = input<string>();

  /**
   * Orientation of the divider: 'horizontal' or 'vertical'.
   */
  layout = input<'horizontal' | 'vertical'>('horizontal');

  /**
   * Line type: 'solid', 'dashed', or 'dotted'.
   */
  type = input<'solid' | 'dashed' | 'dotted'>('solid');

  /**
   * Content alignment: 'left', 'center', 'right', 'top', 'bottom'.
   */
  align = input<'left' | 'center' | 'right' | 'top' | 'bottom'>();

  /**
   * Line color. Can be any CSS variable from the design system.
   */
  color = input<string>('var(--ctrl-border)');

  /**
   * Line thickness (e.g., '1px', '4px').
   */
  thickness = input<string>('1px');

  /**
   * Computed CSS classes for the divider based on inputs.
   */
  getRootClass(): string {
    const base = 'ctrl-divider';
    const layoutClass = this.layout() ? `${base}-${this.layout()}` : '';
    const typeClass = this.type() ? `${base}-${this.type()}` : '';
    const alignClass = this.align() ? `${base}-align-${this.align()}` : '';
    return [
      base,
      layoutClass,
      typeClass,
      alignClass,
      this.styleClass()
    ].filter(Boolean).join(' ');
  }

  /**
   * Returns inline style for the horizontal divider.
   */
  getDividerStyle(): string {
    if (this.layout() === 'horizontal') {
      return `border-bottom: ${this.thickness()} ${this.type()} ${this.color()};`;
    }
    return '';
  }

  /**
   * Devuelve el estilo inline para la barra vertical.
   */
  getVerticalBarStyle(): string {
    return `background: ${this.color()}; width: ${this.thickness()};`;
  }
}
