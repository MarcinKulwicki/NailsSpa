import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { OfferComponent } from './offer/offer.component';
import { PriceListComponent } from './price-list/price-list.component';
import { AppRoutingModule } from './app.routing.module';
import { AppMaterialModule } from './app.material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { TrainingComponent } from './training/training.component';
import { WorkComponent } from './work/work.component';
import { GalleryComponent } from './gallery/gallery.component';
import { StaffComponent } from './staff/staff.component';
import { CooperationComponent } from './cooperation/cooperation.component';
import { ServicesComponent } from './services/services.component';
import { WorkService } from './services/work/work.service';
import { ContentfulService } from './services/contentful/contentful.service';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    OfferComponent,
    PriceListComponent,
    ContactComponent,
    MainComponent,
    TrainingComponent,
    WorkComponent,
    GalleryComponent,
    StaffComponent,
    CooperationComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    AppComponent,
    AboutMeComponent,
    OfferComponent,
    PriceListComponent
  ],
  providers: [WorkService, ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }


