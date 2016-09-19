import { Component } from '@angular/core';

@Component({
    selector: 'slide',
    inputs: ['business'],
    template: `
        <div>Location</div>
        <div>Image</div>
        <div>{{ business }}</div>
        <div>Address. Location</div>
    `
})
export class SlideComponent {
}
