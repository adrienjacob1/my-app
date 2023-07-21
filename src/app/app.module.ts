import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { FaceSnapPreviewComponent } from './face-snap-preview/face-snap-preview.component';
import { HeaderComponent } from './header/header.component';
import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component';
import { httpinterceptorProviders } from './interceptors';

@NgModule({
  declarations: [
    AppComponent,
    SingleFaceSnapComponent,
    FaceSnapListComponent,
    LandingPageComponent,
    FaceSnapPreviewComponent,
    HeaderComponent,
    NewFaceSnapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    httpinterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
