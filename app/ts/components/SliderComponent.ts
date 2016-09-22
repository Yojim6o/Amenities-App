import {
  Component
} from '@angular/core';

@Component({
    selector: 'slider',
    template: `
        <div class="slider-container">
            <h2 class="slider-header">What's the highest rated restaurant in this area?</h2>
            <div>
                <i class="fa fa-map-marker inline-block" aria-hidden="true"></i>
                <h3 class="slider-location-text inline-block">[Listing Name]</h3>
            </div>
            <button class="slider-left">
                <div><</div>
            </button>
            <img class="slider-img" src="https://s3-media2.fl.yelpcdn.com/bphoto/yH4icakrVBLn-o2guHwoWA/ms.jpg" />
            <button class="slider-right">
                <div>></div>
            </button>
            <h2 class="slider-header">[ Establishment ]</h2>
            <h4 class="slider-location-text">[ Establishment Addresss ]. [ Location ]</h4>
            <button class="slider-list-button">
                <i></i>
                <h3>See The List</h3>
                <i></i>
            </button>
        </div>
    `
})
export class SliderComponent {
    businesses: string[];
    selected: number;

    constructor() {
        this.businesses = ['1', '2', '3'];
        this.selected = 0;
    }
}

            // <slide
            //     *ngFor="let business of businesses"
            //     [business]="business">
            // </slide>

            //             <button>Left</button>
            // <button>Right</button>
