import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeaderComponent } from './components/header/header.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    { path: '', title: 'Home', component: HeaderComponent },
    { path: 'home', component: HeaderComponent },
    { path: 'about', title: 'About', component: AboutComponent },
    { path: 'gallery', title: 'Gallery', component: GalleryComponent },
    { path: 'services', title: 'Services', component: ServicesComponent },
    { path: 'testimonial', title: 'Testimonial', component: TestimonialComponent },
    { path: 'clients', title: 'Clients', component: ClientsComponent },
    { path: 'pricing', title: 'Pricing', component: PricingComponent },
    { path: '**', title: 'Not Found', component: NotfoundComponent },


];
