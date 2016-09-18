/*
 * Angular Imports
 */
import {
  NgModule,
  Component
} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

/*
 * Components
 */
import {HomeComponent} from 'components/HomeComponent';
import {LocationComponent} from 'components/LocationComponent';

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
    LocationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // <-- routes
  ],
  bootstrap: [ AmenitiesApp ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
class AmenitiesAppModule {}

platformBrowserDynamic().bootstrapModule(AmenitiesAppModule)
  .catch((err: any) => console.error(err));
