import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  groups: any[];

  constructor() {  }

  ngOnInit(): void {
    this.groups = [
      {
        id: 1,
        name: 'group 1',
      },
      {
        id: 2,
        name: 'group 2'
      },
      {
        id: 3,
        name: 'group 3'
      }
    ];
  }
}
