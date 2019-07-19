import {Component, OnInit} from '@angular/core';
import {Subject} from '../models/subject.model';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  selectedSubject: Subject;

  constructor() { }

  ngOnInit() {
  }

}
