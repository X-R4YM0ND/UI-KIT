import { input, output, ElementRef, viewChild, ChangeDetectionStrategy, Component, computed, effect } from '@angular/core';

/**
 * Radio button component for group selection.
 * Uses signals and modern control flow for reactive state.
 */
@Component({
  selector: 'lib-ctrl-radiobutton',
  templateUrl: './ctrl-radiobutton.html',
  styleUrl: './ctrl-radiobutton.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CtrlRadioButton {
  /**
   * Value associated with the radio button.
   */
  value = input<any>();

  /**
   * Current value of the group. Only one can be selected.
   */
  modelValue = input<any>();

  /**
   * Whether the radio is disabled.
   */
  disabled = input<boolean>(false);

  /**
   * Name of the radio group.
   */
  name = input<string>();

  /**
   * ID of the input element.
   */
  inputId = input<string>();

  /**
   * Whether the radio is required.
   */
  required = input<boolean>(false);

  /**
   * Extra CSS class for the label.
   */
  styleClass = input<string>();

  /**
   * Emitted when the selected value changes.
   */
  valueChange = output<any>();

  /**
   * Reference to the native input element.
   */
  inputViewChild = viewChild<ElementRef>('input');

  /**
   * Computed property indicating if this radio is checked.
   */
  isChecked = computed(() => this.modelValue() === this.value());

  constructor() {
    effect(() => {
      this.isChecked();
      // No need for markForCheck with signals and OnPush
    });
  }

  /**
   * Handles the change event.
   */
  onChange(event: Event) {
    event.stopPropagation(); // Stop native event
    if (!this.disabled()) {
      this.valueChange.emit(this.value());
    }
  }

  /**
   * Focuses the native input element.
   */
  focus() {
    this.inputViewChild()?.nativeElement?.focus();
  }
}