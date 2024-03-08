import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    AboutComponent,
    ClientsComponent,
    FooterComponent,
    GalleryComponent,
    HeaderComponent,
    NavComponent,
    PricingComponent,
    ServicesComponent,
    TestimonialComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landing-page-angular';
}
