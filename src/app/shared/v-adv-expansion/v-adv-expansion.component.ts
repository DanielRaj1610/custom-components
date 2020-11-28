import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'v-adv-expansion',
  templateUrl: './v-adv-expansion.component.html',
  styleUrls: ['./v-adv-expansion.component.scss'],
})
export class VAdvExpansionComponent implements OnInit {
  constructor() {}

  @Input() cardNumber: Number;
  @Input() title: string = '';
  @Input() titleDesc: string = '';
  @Input() saveReq: boolean = false;

  ngOnInit(): void {}
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    console.log(this.step);
    if (this.step === 0) {
      this.step = 1;
    } else {
      this.step = 0;
    }
  }
}
