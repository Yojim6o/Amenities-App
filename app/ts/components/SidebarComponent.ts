import {
  Component
} from '@angular/core';

@Component({
    selector: 'sidebar',
    template: `
        <div class="sidebar-container">
            <button class="sidebar-nav">
                <i class="fa fa-chevron-up chevron-arrow" aria-hidden="true"></i>
            </button>
            <nearby-button
                *ngFor="let amenity of amenities"
                [amenity]="amenity">
            </nearby-button>
            <button class="sidebar-nav">
                <i class="fa fa-chevron-down chevron-arrow" aria-hidden="true"></i>
            </button>
            <button class="overlay-button">
                <i class="fa fa-share" aria-hidden="true"></i>
            </button>
        </div>
    `
})
export class SidebarComponent {
    amenities: any;

    constructor() {
        this.amenities = [
            {
                'name': 'Restaurants',
                'icon': 'fa-cutlery'
            },
            {
                'name': 'Groceries',
                'icon': 'fa-shopping-cart'
            },
            {
                'name': 'Banks',
                'icon': 'fa-university'
            }
        ];
    }
}
