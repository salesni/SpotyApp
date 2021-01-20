import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string){

    const url=`https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDu73B480XY2UKYElMw_pNyck_afQtWjXdY7PHh9_Gc_yl0t00YrjMmkjBPy3lN03RoHBrmZX4U5FDCQxs'
    });
    console.log(url);
    return this.http.get(url,{headers:headers} );

  }

  getNewRelease(){
    return this.getQuery('browse/new-releases?limit=20&offset=5')
    .pipe( map( (datos:any) => datos['albums'].items ) );
  }

  getArtista(id:string){
    return this.getQuery(`artists/${id}`);
  }

  getToTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?market=MX`)
    .pipe( map( (data:any) => data['tracks']));
  }

  getArtistas(termino:string){
    
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe(map((data:any) => data ['artists'].items));

  }
  

}
