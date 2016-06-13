import { Injectable } from 'angular2/core';
import {Jsonp} from 'angular2/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';


@Injectable()
export class ParkingService {

	private heroesUrl = 'http://localhost:5000/api/parkings';  // URL to web api

	constructor(private jsonp: Jsonp) { }

	getHeroes(): Promise<void> {
		return this.jsonp.get(this.heroesUrl)
				   .toPromise()
				   .then(response => {
				   console.log("Here I am.....");
				   response.json().data })
				   .catch();
	}
}