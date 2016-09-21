import { Injectable } from '@angular/core';
import {
    Http,
    Headers,
    Response
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
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
                payload = this.getPayload(payload);
                return({
                    type: 'ADD_AMENITIES',
                    payload
                });
            })
            .subscribe(action => {
                this.store.dispatch(action);
            });
    }

    getBusinesses(data): any {
        return data.map(business => {
            return({
                'id': business.id,
                'name': business.name,
                'img': business.image_url,
                'address': business.location.address[0],
                'city': business.location.city,
                'rating': business.rating
            });
        }).sort((a, b) => { return b.rating - a.rating; });
    }

    getPayload(data): any {
        return({
            'restaurants': {
                'total': data.restaurant.total,
                'businesses': this.getBusinesses(data.restaurant.businesses)
            },
            'grocers': {
                'total': data.grocers.total,
                'busineses': this.getBusinesses(data.grocers.businesses)
            },
            'banks': {
                'total': data.banks.total,
                'busineses': this.getBusinesses(data.banks.businesses)
            }
        });
    }
}

export var amenitiesServiceInjectables: Array<any> = [
    AmenitiesService
];

// this.store.dispatch({type: 'ADD_ITEMS', payload: initialItems});
