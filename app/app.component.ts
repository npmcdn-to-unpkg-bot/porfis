import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { DashboardComponent } from './dashboard.component';
import { LocationsComponent } from './locations.component';
import { LocationDetailComponent } from './location-detail.component';
import { LocationService } from './location.service';

import { SelectParkingComponent } from './select-parking.component';

@Component({
  selector: 'my-app',
   templateUrl: 'app/landingPage.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    LocationService
  ]
})

@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'LocationDetail',
    component: LocationDetailComponent
  },
  {
    path: '/locations',
    name: 'Locations',
    component: LocationsComponent
  },
  {
    path: '/selectParking',
    name: 'SelectParking',
    component: SelectParkingComponent
  }
])
export class AppComponent {
  title = 'Parking On Rent';
}
