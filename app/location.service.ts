import { Injectable } from 'angular2/core';

import { Location } from './location';
import { LOCATIONS } from './mock-locations';

@Injectable()
export class LocationService {
  getLocations() {
    return Promise.resolve(LOCATIONS);
  }

  getLocationsSlowly() {
    return new Promise<Location[]>(resolve =>
      setTimeout(()=>resolve(LOCATIONS), 2000) // 2 seconds
    );
  }

  getLocation(id: number) {
    return Promise.resolve(LOCATIONS).then(
      locations => locations.filter(location => location.id === id)[0]
    );
  }
}
