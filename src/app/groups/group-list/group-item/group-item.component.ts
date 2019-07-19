import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Group} from '../../../models/group.model';

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.css']
})
export class GroupItemComponent implements OnInit {

  @Input() group: Group;

  @Output() groupSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelectedGroup() {
    console.log('click on GroupItemComponsnt');
    this.groupSelected.emit();
  }
}
