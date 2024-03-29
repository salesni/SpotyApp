import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';


import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {ROUTES} from './app.routes';
import {SpotifyService} from './services/spotify.service';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { ArtistsComponent } from './components/artists/artists.component';
import { UrlSeguraPipe } from './pipes/url-segura.pipe';
import { LoadingComponent } from './components/loading/loading.component';
import { MultiInputComponent } from './components/multi-input/multi-input.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    TarjetasComponent,
    NoimagePipe,
    ArtistsComponent,
    UrlSeguraPipe,
    LoadingComponent,
    MultiInputComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    RouterModule.forRoot(ROUTES,{useHash:true})
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
