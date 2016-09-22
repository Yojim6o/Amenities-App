import {
  Component
} from '@angular/core';

@Component({
    selector: 'sidebar',
    template: `
        <div class="sidebar-container">
            <button class="sidebar-nav">
                <i></i>
            </button>
            <nearby-button
                *ngFor="let amenity of amenities"
                [amenity]="amenity">
            </nearby-button>
            <button class="sidebar-nav">
                <i></i>
            </button>
            <button class="overlay-button">
                <i></i>
            </button>
        </div>
    `
})
export class SidebarComponent {
    amenities: string[];

    constructor() {
        this.amenities = ['Restaurants', 'Groceries', 'Banks'];
    }
}
