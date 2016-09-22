import {Component} from '@angular/core';

@Component({
    selector: 'amenity',
    inputs: ['amenity'],
    template: `
        <div class="amenity-container">
            <div class="icon-container inline-block"></div>
            <div class="top inline-block amenity-detail">
                <div class="inline-block">
                    <h2>Amenity</h2>
                    <h3>## near this listing</h3>
                </div>
                <h2 class="see-all inline-block top">See All
                    <i></i>
                </h2>
            </div>
        </div>
    `
})
export class AmenityComponent {
}
