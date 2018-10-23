import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { OfferComponent } from './offer/offer.component';
import { PriceListComponent } from './price-list/price-list.component';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { TrainingComponent } from './training/training.component';
import { WorkComponent } from './work/work.component';
import { GalleryComponent } from './gallery/gallery.component';
import { StaffComponent } from './staff/staff.component';
import { CooperationComponent } from './cooperation/cooperation.component';
import { ServicesComponent } from './services/services.component';

const appRoutes: Routes = [
  {
    path: 'aboutMe',
    component: AboutMeComponent
  },
  {
    path: 'offer',
    component: OfferComponent
  },
  {
    path: 'price-list',
    component: PriceListComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'training',
    component: TrainingComponent
  },
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'staff',
    component: StaffComponent
  },
  {
    path: 'cooperation',
    component: CooperationComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
