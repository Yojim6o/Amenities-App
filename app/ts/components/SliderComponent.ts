import {
  Component
} from '@angular/core';

@Component({
    selector: 'slider',
    template: `
        <div class="slider-container">
            <h2 class="slider-header">
                What's the highest rated [amenity] in this area?
            </h2>
            <div>
                <i
                    class="fa fa-map-marker inline-block marker"
                    aria-hidden="true"
                >
                </i>
                <h3 class="slider-location-text inline-block">
                    [Listing Name]
                </h3>
            </div>
            <button class="slider-left">
                <div>
                    <i class="fa fa-angle-left fa-slide" aria-hidden="true"></i>
                </div>
            </button>
            <img
                class="slider-img"
                src="https://s3-media2.fl.yelpcdn.com/bphoto/yH4icakrVBLn-o2guHwoWA/ms.jpg"
            />
            <button class="slider-right">
                <div>
                    <i
                        class="fa fa-angle-right fa-slide"
                        aria-hidden="true"
                    >
                    </i>
                </div>
            </button>
            <h2 class="slider-header">[ Establishment ]</h2>
            <h4 class="slider-location-text">
                [ Establishment Addresss ]. [ Location ]
            </h4>
            <button class="slider-list-button">
                <div class="circle inline-block">
                    <i class="fa fa-home" aria-hidden="true"></i>
                </div>
                <h3 class="inline-block">See The List</h3>
                <i
                    class="fa fa-angle-right fa-list-arrow"
                    aria-hidden="true"
                >
                </i>
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
