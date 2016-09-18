import {
  Component
} from '@angular/core';

@Component({
    selector: 'sidebar',
    template: `
        <button>Up</button>
        <button>Hovery</button>
        <nearby-button
            *ngFor="let amenity of amenities"
            [amenity]="amenity">
        </nearby-button>
        <button>Down</button>
    `
})
export class SidebarComponent {
    amenities: string[];

    constructor() {
        this.amenities = ['Restaurants', 'Groceries', 'Banks'];
    }
}
