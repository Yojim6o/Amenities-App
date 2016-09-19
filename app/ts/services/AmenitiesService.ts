import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';

import { AppStore } from '../models/AppStoreModel';
import { Business } from '../models/BusinessModel';
import { Amenities } from '../models/AmenitiesModel';

const BASE_URL = 'http://prod-joyfulhome-api.synapsys.us/location/amenitiesInLocation/KS/Wichita';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class AmenitiesService {
    amenities: Observable<Amenities>;

    constructor(private http: Http, private store: Store<AppStore>) {
        this.amenities = store.select('amenities');
    }

    loadAmenities() {
        this.http.get(BASE_URL)
            .map(res => {
                res.json().data;
            })
            .map(payload => ({ type: 'ADD_AMENITIES', payload }))
            .subscribe(action => this.store.dispatch(action));
    }
}

export var amenitiesServiceInjectables: Array<any> = [
    AmenitiesService
];

// this.store.dispatch({type: 'ADD_ITEMS', payload: initialItems});