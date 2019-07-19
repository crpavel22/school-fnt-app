import {Component, OnInit} from '@angular/core';
import {Group} from '../../models/group.model';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  groups: Group[] = [
    new Group('Mathematics 1', 'Mathematics course first'),
    new Group('Mathematics 2', 'Mathematics course second'),
    new Group('Mathematics 3', 'Mathematics course third')
  ];

  constructor() { }

  ngOnInit() {
  }

}
