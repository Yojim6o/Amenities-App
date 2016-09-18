import {
  Component
} from '@angular/core';

@Component({
    selector: 'amenities',
    template: `
        <amenity
            *ngFor="let amenity of amenities"
            [amenity]="amenity">
        </amenity>
        <button>
            <div>icon</div>
            See All Amenities >
        </button>
    `
})
export class AmenitiesComponent {
    amenities: string[];

    constructor() {
        this.amenities = ['Restaurants', 'Grocery Stores', 'Banks', 'Other Amenities'];
    }
}
