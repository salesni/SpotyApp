import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any [] = [];

  constructor(private spotifyService :SpotifyService) { }

  ngOnInit(): void {
    this.spotifyService.getNewRelease()
    .subscribe((data:any)=> {
      this.nuevasCanciones = data;
      console.log(this.nuevasCanciones);
    });
  }

}
