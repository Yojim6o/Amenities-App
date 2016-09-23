import { Injectable } from '@angular/core';
import {
    Http,
    // Headers,
    // Response
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';

import { AppStore } from '../models/AppStoreModel';
// import { Business } from '../models/BusinessModel';
import { Amenities } from '../models/AmenitiesModel';

const LOCATION: string = 'http://prod-joyfulhome-api.synapsys.us';
const PATH: string = '/location/amenitiesInLocation/';
const BASE_URL: string = `${LOCATION}${PATH}`;
// const HEADER =
// { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class AmenitiesService {
    amenities: any;
    href: string;
    params: any;
    paramArr: any;
    state: any;
    city: any;
    FULL_URL: any;

    constructor(private http: Http, private store: Store<AppStore>) {
        this.amenities = store.select('amenities');

        this.href = window.location.href;
        this.params = this.href.split('location/')[1];
        this.paramArr = this.params.split('/');

        this.state = `${this.paramArr[1]}/`;
        this.city = `${this.paramArr[0]}`;
        this.FULL_URL = `${BASE_URL}${this.state}${this.city}`;
    }

    loadAmenities(): any {
        this.http.get(this.FULL_URL)
            .map((res: any) => {
                return res.json().data;
            })
            .map((payload: any) => {
                payload = this.getPayload(payload);
                return({
                    type: 'ADD_AMENITIES',
                    payload
                });
            })
            .subscribe((action: any) => {
                this.store.dispatch(action);
            });
    }

    getBusinesses(data: any): any {
        return data.map((business: any) => {
            return({
                'id': business.id,
                'name': business.name,
                'img': business.image_url,
                'address': business.location.address[0],
                'city': business.location.city,
                'rating': business.rating
            });
        }).sort((a: any, b: any) => { return b.rating - a.rating; });
    }

    getPayload(data: any): any {
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
