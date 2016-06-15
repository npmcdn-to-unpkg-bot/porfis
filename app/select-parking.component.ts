import { Component, Input, OnInit} from 'angular2/core';
import { RouteParams } from 'angular2/router';
import {Router} from 'angular2/router';
 
import { Location } from './location';
import { LocationService } from './location.service';


@Component({
  selector: 'select-parking',
  templateUrl: 'app/select-parking.component.html',
  styleUrls: ['app/select-parking.component.css']
})

export class SelectParkingComponent implements OnInit {
  selectedSpace: any;
  locations: any;
  selected: any;
  
  constructor(private router: Router,
    private _locationService: LocationService,
    private _routeParams: RouteParams) {
	
	console.log("_routeParams" + _routeParams);
	this.selectedSpace = _routeParams.params['space'];
  }

  getLocations() {
    this._locationService.getLocations().then(locations => this.locations = locations);
  }

  ngOnInit() {
    this.getLocations();
  }

  onSelect(p: any) { 
  	this.selected = p;
  	console.log('selected Parking: ' + p)
  }

  openNavigationApp(s: any) { 
  	var cordstr = "" + s.cords[0].lat + "," + s.cords[0].lng;
   	var win = window.open("http://maps.google.com?q=" + cordstr + "&daddr=" + cordstr +  "&z=15&t=p", '_blank');
  	win.focus(); 
  }

  goBack() {
    window.history.back();
  }
}
