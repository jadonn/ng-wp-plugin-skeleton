import { Injectable } from '@angular/core';

import { WindowService } from './window.service';

import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private apiHost: String;
  private isAdmin: false;

  constructor(private http: Http, private windowService: WindowService) {
    this.apiHost = windowService.nativeWindow.appInfo.home_url + '/wp-json/performance-management/v1/api';
   }

  checkIsAdmin() {
    const headers = new Headers();
    const nonce = this.windowService.nativeWindow.appInfo.nonce;
    headers.append('X-WP-Nonce', nonce);
    headers.append('Cache-Control', 'no-cache, no-store, must-revalidate');
    return this.http.get(this.apiHost + '/check_admin', { headers })
                    .map(res => res.json())
                    .map((res) => {
                      if ( res.success ) {
                      this.isAdmin = res.result;
                      return res.result;
                      }else {
                        this.isAdmin = false;
                        return false;
                      }
                    });
  }
  getIsAdmin() {
    return this.isAdmin;
  }
}
