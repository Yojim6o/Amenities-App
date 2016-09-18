/*
 * Angular Imports
 */
import {
    NgModule,
    Component
} from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
    RouterModule,
    Routes
} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

/*
 * Components
 */
import { HomeComponent } from 'components/HomeComponent';
import { LocationComponent } from 'components/LocationComponent';
import { SidebarComponent } from 'components/SidebarComponent';
import { NearbyButtonComponent } from 'components/NearbyButtonComponent';
import { ContentComponent } from 'components/ContentComponent';
import { SliderComponent } from 'components/SliderComponent';
import { AmenitiesComponent } from 'components/AmenitiesComponent';
import { SlideComponent } from 'components/SlideComponent';
import { AmenityComponent } from 'components/AmenityComponent';

/*
 * Injectables
 */
import { servicesInjectables } from './services/services';

/*
 * Services
 */
// import {
//   AmenitiesService
// } from './services/services';

/*
 * Webpack
 */
require('css/styles.scss');

@Component({
    selector: 'amenities-app',
    template: `
        <div>
            <nav>
                <ul>
                    <li><a [routerLink]="['home']">Home</a></li>
                    <li><a [routerLink]="['location']">Location</a></li>
                </ul>
            </nav>

            <router-outlet></router-outlet>
        </div>
    `
})
class AmenitiesApp {
    // constructor(public AmenitiesService: AmenitiesService) {}
}

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'location', component: LocationComponent }
];

@NgModule({
    declarations: [
        AmenitiesApp,
        HomeComponent,
        LocationComponent,
        SidebarComponent,
        NearbyButtonComponent,
        ContentComponent,
        SliderComponent,
        AmenitiesComponent,
        SlideComponent,
        AmenityComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        RouterModule.forRoot(routes) // <-- routes
    ],
    bootstrap: [ AmenitiesApp ],
    providers: [
        servicesInjectables,
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ]
})
class AmenitiesAppModule {}

platformBrowserDynamic().bootstrapModule(AmenitiesAppModule)
    .catch((err: any) => console.error(err));
