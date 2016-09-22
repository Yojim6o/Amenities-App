import {
  Component
} from '@angular/core';

@Component({
    selector: 'content',
    template: `
        <div class="content-container">
            <slider></slider>
            <amenities></amenities>
        </div>
    `
})
export class ContentComponent {
}
