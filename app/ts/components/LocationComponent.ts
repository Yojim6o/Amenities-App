import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { Store } from '@ngrx/store';
import { AmenitiesService } from '../services/AmenitiesService';
// import { AppStore } from '../models/AppStoreModel';
// import { Amenities } from '../models/AmenitiesModel';
import { Amenities } from '../stores/AmenitiesStore';

@Component({
    selector: 'location',
    template: `
        <div class="location-container">
            <pre>{{ amenities | async }}</pre>
            <content></content>
            <sidebar></sidebar>
        </div>
    `,
    providers: [ AmenitiesService ]
})
export class LocationComponent {
    amenities: Amenities;

    constructor(private amenitiesService: AmenitiesService) {
        console.log(this.amenities);
        this.amenities = amenitiesService.amenities;

        amenitiesService.loadAmenities();

        console.log(this.amenities);
    }
}
