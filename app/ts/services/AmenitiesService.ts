import { Injectable } from '@angular/core';
import {
    Http,
    Headers,
    Response
} from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';

import { AppStore } from '../models/AppStoreModel';
// import { Business } from '../models/BusinessModel';
import { Amenities } from '../models/AmenitiesModel';

const BASE_URL: string = 'http://prod-joyfulhome-api.synapsys.us/location/amenitiesInLocation/KS/Wichita';
// const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class AmenitiesService {
    amenities: any;

    constructor(private http: Http, private store: Store<AppStore>) {
        this.amenities = store.select('amenities');
    }

    loadAmenities(): any {
        this.http.get(BASE_URL)
            .map(res => {
                return res.json().data;
            })
            .map(payload => {
                return({
                    type: 'ADD_AMENITIES',
                    payload
                });
            })
            .subscribe(action => {
                this.store.dispatch(action);
            });
    }

    // for each amenity, we need the total and the businesses

    // for each business, we need this stuff
}

export var amenitiesServiceInjectables: Array<any> = [
    AmenitiesService
];

// this.store.dispatch({type: 'ADD_ITEMS', payload: initialItems});
