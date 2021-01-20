import { Routes } from '@angular/router';
import { ArtistsComponent } from './components/artists/artists.component';
import { HomeComponent } from './components/home/home.component';
import { MultiInputComponent } from './components/multi-input/multi-input.component';
import { SearchComponent } from './components/search/search.component';




export const ROUTES: Routes = [
    {path : 'home', component: HomeComponent},
    {path : 'search', component: SearchComponent},
    {path : 'artist/:id', component: ArtistsComponent},
    {path : 'multiInput',component: MultiInputComponent},
    {path : '', pathMatch: 'full', component: HomeComponent},
    {path : '**', pathMatch: 'full', component: HomeComponent}
];