import { Component } from '@angular/core';

@Component({
    selector: 'slide',
    inputs: ['business'],
    template: `
        <div>What's the highest rated restaurant in this area?</div>
        <div>icon</div>
        <div>Location</div>
        <div>Image</div>
        <div>{{ business }}</div>
        <div>Address. Location</div>
    `
})
export class SlideComponent {
}
