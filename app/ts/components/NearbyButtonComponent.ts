import {Component} from '@angular/core';

@Component({
    selector: 'nearby-button',
    inputs: ['amenity'],
    template: `
        <div class="nearby-button-container">
            <i></i>
            <h1>Nearby {{ amenity }}</h1>
        </div>
    `
})
export class NearbyButtonComponent {
}
