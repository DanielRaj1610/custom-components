import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { onMainContentChange } from './animations/animations';
import { SidenavService } from './services/sidenav.service';
import { Address } from './shared/Address';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [onMainContentChange],
})
export class AppComponent {
  title = 'custom-components';
  onSideNavChange: boolean;
  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/),
    ]),
  });
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  highcharts = Highcharts;
  chartOptions = {
    chart: {
      type: 'spline',
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yAxis: {
      title: {
        text: 'Temperature °C',
      },
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
        },
      },
    },
    tooltip: {
      valueSuffix: ' °C',
    },
    series: [
      {
        name: 'Tokyo',
        data: [
          7.0,
          6.9,
          9.5,
          14.5,
          18.2,
          21.5,
          25.2,
          26.5,
          23.3,
          18.3,
          13.9,
          9.6,
        ],
      },
      {
        name: 'New York',
        data: [
          -0.2,
          0.8,
          5.7,
          11.3,
          17.0,
          22.0,
          24.8,
          24.1,
          20.1,
          14.1,
          8.6,
          2.5,
        ],
      },
      {
        name: 'Berlin',
        data: [
          -0.9,
          0.6,
          3.5,
          8.4,
          13.5,
          17.0,
          18.6,
          17.9,
          14.3,
          9.0,
          3.9,
          1.0,
        ],
      },
      {
        name: 'London',
        data: [
          3.9,
          4.2,
          5.7,
          8.5,
          11.9,
          15.2,
          17.0,
          16.6,
          14.2,
          10.3,
          6.6,
          4.8,
        ],
      },
    ],
  };

  constructor(
    private _sidenavService: SidenavService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this._sidenavService.sideNavState$.subscribe((res) => {
      console.log(res);
      this.onSideNavChange = res;
    });

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  onSubmit() {
    console.log(this.authForm.value);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
