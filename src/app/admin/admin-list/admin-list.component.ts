import { Component, OnInit } from '@angular/core';

import { AdminListService } from './admin-list.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  public users = [];

  constructor( private adminListService: AdminListService, private router: Router ) { }

  ngOnInit() {
    this.adminListService.getUsers().subscribe( ( res ) => {
      console.log( res );
      this.users = res;
    });
  }

  onSelect( user ) {
    this.router.navigate( [ '/admin/user', user.id ] );
  }

}
