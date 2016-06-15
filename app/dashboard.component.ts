import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Location } from './location';
import { LocationService } from './location.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  locations: Location[] = [];

  constructor(
    private _router: Router,
    private _locationService: LocationService) {
  }

  ngOnInit() {
    this._locationService.getLocations()
      .then(locations => this.locations = locations);
  }

  gotoDetail(location: Location) {
    let link = ['LocationDetail', { id: location.id }];
    this._router.navigate(link);
  }
}
