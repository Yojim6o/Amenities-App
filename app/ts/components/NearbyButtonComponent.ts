import {Component} from '@angular/core';

@Component({
    selector: 'nearby-button',
    inputs: ['amenity'],
    template: `
        <div class="nearby-button-container">
            <i class="fa {{ amenity.icon }} sidebar-icon" aria-hidden="true"></i>
            <h1>Nearby {{ amenity.name }}</h1>
        </div>
    `
})
export class NearbyButtonComponent {
}
