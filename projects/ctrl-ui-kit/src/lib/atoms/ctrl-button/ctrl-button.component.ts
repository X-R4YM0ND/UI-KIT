import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ctrl-button',
  templateUrl: './ctrl-button.component.html',
  styleUrls: ['./ctrl-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CtrlButtonComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}


  variant = input <'primary' | 'secondary' | 'tertiary' | 'quarter'>('primary') 
  useAccentIcon = input<boolean>(false);
}
