import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'urlSegura'
})
export class UrlSeguraPipe implements PipeTransform {

  constructor (private domSanitizer: DomSanitizer){}

  transform(value: string): unknown {
    const url ="https://open.spotify.com/embed?uri=";
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url+value);
  }

}
