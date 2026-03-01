import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ctrl-button',
  templateUrl: './ctrl-button.component.html',
  styleUrls: ['./ctrl-button.component.scss'],
})
export class CtrlButtonComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}


  variant = input <'primary' | 'secondary' | 'tertiary'>('primary')
  useAccentIcon = input<boolean>(false);
}
