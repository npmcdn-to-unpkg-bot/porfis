export class Location {
  id: number;
  name: string;
  center: {lat: Number, lng: Number};
  spaces: [{id: Number, name: String, parkings : [{
			id : Number,
			name : String,
			status : String
		}],
		cords : [{
			lat : Number,
			lng : Number
			}]
		}];
}
