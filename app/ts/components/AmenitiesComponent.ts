import {
  Component
} from '@angular/core';

@Component({
    selector: 'amenities',
    template: `
        <div>
            <amenity
                *ngFor="let amenity of amenities"
                [amenity]="amenity">
            </amenity>
            <button>
                <div>icon</div>
                See All Amenities >
            </button>
        </div>
    `
})
export class AmenitiesComponent {
    amenities: string[];

    constructor() {
        this.amenities = ['restaurants', 'grocers', 'banks'];
    }
}
