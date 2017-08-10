import { Injectable, Inject } from '@angular/core';

import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

import { WindowService } from '../../window.service';

@Injectable()
export class AdminListService {

  private apiHost: String;
  private host: String;

  constructor( private windowService: WindowService, private http: Http ) {
    this.host = this.windowService.nativeWindow.appInfo.home_url;
  }

  getUsers() {
    const headers = new Headers();
    const nonce = this.windowService.nativeWindow.appInfo.nonce;
    headers.append( 'X-WP-Nonce', nonce );
    headers.append( 'Cache-Control', 'no-cache, no-store, must-revalidate' );
    return this.http.get( this.host + '/wp-json/wp/v2/users?roles=subscriber', { headers } )
                    .map( res => res.json() )
                    .map( ( res ) => {
                      return res;
                    });
  }

}
