import { Injectable } from 'angular2/core';
import {Jsonp} from 'angular2/http';

import 'rxjs/add/operator/toPromise';

import { Location } from './location';


@Injectable()
export class ParkingService {

	private locationsUrl = 'http://localhost:5000/api/parkings';  // URL to web api

	constructor(private jsonp: Jsonp) { }

	getLocations(): Promise<void> {
		return this.jsonp.get(this.locationsUrl)
				   .toPromise()
				   .then(response => {
				   console.log("Here I am.....");
				   response.json().data })
				   .catch();
	}
}