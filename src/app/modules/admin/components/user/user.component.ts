import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: any[];

  constructor() { }

  ngOnInit(): void {
    this.users = [
      {
        id: 1,
        name: 'user 1',
      },
      {
        id: 2,
        name: 'user 2'
      },
      {
        id: 3,
        name: 'user 3'
      }
    ];
  }

}
