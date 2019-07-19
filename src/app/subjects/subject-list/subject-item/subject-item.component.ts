import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject} from '../../../models/subject.model';

@Component({
  selector: 'app-subject-item',
  templateUrl: './subject-item.component.html',
  styleUrls: ['./subject-item.component.css']
})
export class SubjectItemComponent implements OnInit {

  @Output() subjectSelected = new EventEmitter<void>();
  @Input() subject: Subject;

  constructor() { }

  ngOnInit() {
  }

  onSelectSubject() {
    this.subjectSelected.emit();
  }
}
