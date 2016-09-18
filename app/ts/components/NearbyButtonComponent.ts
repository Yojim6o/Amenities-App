import {Component} from '@angular/core';

@Component({
    selector: 'nearby-button',
    inputs: ['amenity'],
    template: `
        <div>icon</div>
        <div>Nearby {{ amenity }}</div>
    `
})
export class NearbyButtonComponent {
}
