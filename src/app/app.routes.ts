import { Routes } from '@angular/router';
import { HomePage } from './home/home';
import { AboutUsPage } from './about-us/components/about-us';

export const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'about-us', component: AboutUsPage }
];
