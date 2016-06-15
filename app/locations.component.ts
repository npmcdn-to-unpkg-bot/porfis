import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Location } from './location';
import { LocationDetailComponent } from './location-detail.component';
import { LocationService } from './location.service';

@Component({
  selector: 'my-locations',
  templateUrl: 'app/locations.component.html',
  styleUrls:  ['app/locations.component.css'],
  directives: [LocationDetailComponent]
})
export class LocationsComponent implements OnInit {
  locations: Location[];
  selectedLocation: Location;

  constructor(
    private _router: Router,
    private _locationService: LocationService) { }

  getLocations() {
    this._locationService.getLocations().then(locations => this.locations = locations);
  }

  ngOnInit() {
    this.getLocations();
  }

  onSelect(location: Location) { this.selectedLocation = location; }

  gotoDetail() {
    this._router.navigate(['LocationDetail', { id: this.selectedLocation.id }]);
  }
}
