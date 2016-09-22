import { Component } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AmenitiesService } from '../services/AmenitiesService';
import { AppStore } from '../models/AppStoreModel';
// import { Amenities } from '../models/AmenitiesModel';

@Component({
    selector: 'location',
    template: `
        <div class="location-container">
            <content></content>
            <sidebar></sidebar>
        </div>
    `,
    providers: [ AmenitiesService ]
})
export class LocationComponent {
    amenities: any;

    constructor(private amenitiesService: AmenitiesService,
                private store: Store<AppStore>) {
        this.amenities = amenitiesService.amenities;

        amenitiesService.loadAmenities();
    }
}
            // <pre style="border: 1px solid red">{{ amenities | async }}</pre>
