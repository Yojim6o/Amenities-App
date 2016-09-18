import {
  Component
} from '@angular/core';

@Component({
    selector: 'slider',
    template: `
        <slide
            *ngFor="let business of businesses"
            [business]="business">
        </slide>
        <button>Left</button>
        <button>Right</button>
        <button>See List</button>
    `
})
export class SliderComponent {
    businesses: string[];

    constructor() {
        this.businesses = ['1', '2', '3'];
    }
}
