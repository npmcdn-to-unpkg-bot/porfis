import { Component, Input, OnInit, NgZone } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import {Router} from 'angular2/router';
 
import { Location } from './location';
import { LocationService } from './location.service';

declare var google: any;

@Component({
  selector: 'my-location-detail',
  templateUrl: 'app/location-detail.component.html',
  styleUrls: ['app/location-detail.component.css']
})

export class LocationDetailComponent implements OnInit {
  @Input() location: Location;
  router: Router;
  
  constructor(private _router: Router,
    private _locationService: LocationService,
    private _routeParams: RouteParams,
	private zone: NgZone) {
	this.router = _router;
  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._locationService.getLocation(id)
      .then(location => {
	 
		this.location = location

		var pos = this.location.center;

	  var myLatLng = new google.maps.LatLng(pos.lat, pos.lng);
	  // General Options
	  var mapOptions = {
		zoom: 19,
		center: myLatLng,
		mapTypeId: google.maps.MapTypeId.RoadMap
	  };
	  var map = new google.maps.Map(document.getElementById('mapid'),mapOptions);
	  
	  // Polygon Coordinates
	  var self = this;
	   
	  if(this.location.spaces){
	  	this.location.spaces.forEach(function(space){
			if(space.cords != null){
					var cords: any[] = [];
					space.cords.forEach(function(cord){
						cords.push(new google.maps.LatLng(cord.lat,cord.lng));
					})

				  // Styling & Controls
				  var myPolygon = new google.maps.Polygon({
					paths: cords,
					draggable: false, // turn off if it gets annoying
					editable: false,
					strokeColor: '#FF0000',
					strokeOpacity: 0.8,
					strokeWeight: 2,
					fillColor: '#FF0000',
					fillOpacity: 0.35
				  });

				  myPolygon.setMap(map);

				  var marker = new google.maps.Marker({
					position: cords[1],
					map: map,
					title: space.name,
					label: "P"
				  });
				  	
				  myPolygon.addListener('click', function() {
					self.zone.run(function() {
						self.router.navigate(['SelectParking', {'id': space.id, 'space': space}]);
					 });
				   });
				}
			})
		  }
		  });
	  }

  goBack() {
    window.history.back();
  }
}
