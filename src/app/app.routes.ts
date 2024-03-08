import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeaderComponent } from './components/header/header.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';

export const routes: Routes = [
    { path: '', component: HeaderComponent },
    { path: 'home', component: HeaderComponent },
    { path: 'about', component: AboutComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'testimonial', component: TestimonialComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'pricing', component: PricingComponent },


];
