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
                    <div class="circle inline-block"><i class="fa fa-home" aria-hidden="true"></i></div>
                    <h3 class="inline-block">See All Amenities</h3>
                    <i class="fa fa-angle-right fa-list-arrow" aria-hidden="true"></i>
                </button>
                <div class="bottom-line"></div>
            </div>
        </div>
    `
})
export class AmenitiesComponent {
    amenities: any;

    constructor() {
        this.amenities = [
            {
                'name': 'Restaurants',
                'icon': 'fa-cutlery'
            },
            {
                'name': 'Grocery Stores',
                'icon': 'fa-shopping-cart'
            },
            {
                'name': 'Banks',
                'icon': 'fa-university'
            },
            {
                'name': 'Other Amenities',
                'icon': 'fa-ellipsis-h'
            }
        ];
    }
}
