import {
  Component
} from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from '@ngrx/store';
import { AmenitiesService } from '../services/AmenitiesService';
import { AppStore } from '../models/AppStoreModel';
import { Amenities } from '../models/AmenitiesModel';

@Component({
    selector: 'amenities',
    template: `
        <div style="border: 1px solid red">
            <amenity
                *ngFor="let amenity of amenities"
                [amenity]="amenity | async">
            </amenity>
            <button>
                <div>icon</div>
                See All Amenities >
            </button>
        </div>
    `
})
export class AmenitiesComponent {
    amenities: Observable<Amenities>;
    // amenities: string[];

    constructor(private AmenitiesService: AmenitiesService, private store: Store<AppStore>) {
        this.amenities = AmenitiesService.amenities; // Bind to the "items" observable on the "ItemsService"
        AmenitiesService.loadAmenities();
    }
}
