import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AmenitiesService } from '../services/AmenitiesService';
import { AppStore } from '../models/AppStoreModel';
import { Amenities } from '../models/AmenitiesModel';
// import { Amenities } from '../stores/AmenitiesStore';

@Component({
    selector: 'location',
    template: `
        <div class="location-container">
            <content></content>
            <sidebar></sidebar>
            <pre>{{ amenities | async }}</pre>
        </div>
    `,
    providers: [ AmenitiesService ]
})
export class LocationComponent {
    amenities: Observable<Amenities>;

    constructor(private amenitiesService: AmenitiesService,
                private store: Store<AppStore>) {
        console.log(this.amenities);
        this.amenities = amenitiesService.amenities;

        amenitiesService.loadAmenities();

        console.log(this.amenities); // Store._Dispatcher._value.payload
    }
}
