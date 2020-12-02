import { Component, OnInit } from '@angular/core';
import { animateText, onSideNavChange } from 'src/app/animations/animations';
import { SidenavService } from 'src/app/services/sidenav.service';

interface Page {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'v-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss'],
  animations: [onSideNavChange, animateText],
})
export class SidenavMenuComponent implements OnInit {
  public sideNavState: boolean = false;
  public linkText: boolean = false;

  public pages: Page[] = [{ name: 'Inbox', link: 'some-link', icon: 'inbox' }];

  constructor(private _sidenavService: SidenavService) {}

  ngOnInit() {}

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState;

    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200);
    this._sidenavService.sideNavState$.next(this.sideNavState);
  }
}
