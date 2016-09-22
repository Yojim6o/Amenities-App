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
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { StoreModule } from '@ngrx/store';

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
 * Stores
 */
import { amenities } from './stores/AmenitiesStore';

/*
 * Webpack
 */
require('css/styles.scss');

@Component({
    selector: 'amenities-app',
    template: `
        <div class="app-component">
            <header>
                <div class="header-highlight"></div>
                <h2 class="header-text inline-block">Top Rated Amenities In and Around [Listing Name]</h2>
                <a class="inline-block search-container" [routerLink]="['home']">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </a>
            </header>
            <router-outlet></router-outlet>
        </div>
    `
})
class AmenitiesApp {
    // constructor(public AmenitiesService: AmenitiesService) {}
}

            // <nav>
            //     <ul>
            //         <li><a [routerLink]="['home']">Home</a></li>
            //         <li><a [routerLink]="['location']">Location</a></li>
            //     </ul>
            // </nav>

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
        RouterModule.forRoot(routes),
        StoreModule.provideStore({ amenities })
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
