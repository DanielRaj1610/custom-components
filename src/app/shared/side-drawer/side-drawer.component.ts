import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'v-side-drawer',
  templateUrl: './side-drawer.component.html',
  styleUrls: ['./side-drawer.component.scss'],
})
export class SideDrawerComponent implements OnInit {
  @Input() position: string = 'start';
  constructor() {}

  ngOnInit(): void {}
}
