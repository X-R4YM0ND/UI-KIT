import { Component, input, OnInit, signal } from '@angular/core';
import { CommandPersonality } from './ctrl-icons.constants';

@Component({
  selector: 'lib-ctrl-icon',
  templateUrl: './ctrl-icon.component.html',
  styleUrls: ['./ctrl-icon.component.scss'],
})
export class CtrlIconComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  personality = input<CommandPersonality>('cash-lick')

  isActive = input<boolean>(false);
  isTapped = signal(false);

  triggerAnim(){
    if(this.isTapped()) return;

    this.isTapped.set(true);

    setTimeout(()=>{
      this.isTapped.set(false);
    }, 1500);
  }


}
