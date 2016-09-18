import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Amenities }      from '../models';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class AmenitiesService {
    constructor (private http: Http) {}

    private amenitiesUrl: string = `http://prod-joyfulhome-api.synapsys.us/location/amenitiesInLocation/KS/Wichita`;  // URL to web API

    getAmenities (): Observable<Amenities[]> {
        return this.http.get(this.amenitiesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data.restaurant.businesses || { };
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status}
                - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}

export var amenitiesServiceInjectables: Array<any> = [
    AmenitiesService
];
