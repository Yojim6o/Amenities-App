import {Component} from '@angular/core';

@Component({
    selector: 'amenity',
    inputs: ['amenity'],
    template: `
        <div>icon</div>
        <div>{{ amenity }}</div>
        <div>## near this listing</div>
        <button>See All
            <div>icon</div>
        </button>
    `
})
export class AmenityComponent {
}
