import {
  Component
} from '@angular/core';

@Component({
    selector: 'amenities',
    template: `
        <div class="amenities-container">
            <amenity
                *ngFor="let amenity of amenities"
                [amenity]="amenity">
            </amenity>
            <div style="text-align: center">
                <button class="amenity-list-button">
                    <i></i>
                    <h3>See All Amenities</h3>
                    <i></i>
                </button>
                <div class="bottom-line"></div>
            </div>
        </div>
    `
})
export class AmenitiesComponent {
    amenities: string[];

    constructor() {
        this.amenities = ['restaurants', 'grocers', 'banks', 'other amenties'];
    }
}
