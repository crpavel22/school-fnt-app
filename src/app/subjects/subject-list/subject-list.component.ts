import {Component, OnInit} from '@angular/core';
import {Subject} from '../../models/subject.model';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  subjects: Subject[] = [
    new Subject('Mathematics I', 6, 'Practice Mathematics beginner'),
    new Subject('Mathematics II', 6, 'Practice Mathematics intermediate'),
    new Subject('Mathematics III', 6, 'Practice Mathematics advance')
  ];

  constructor() { }

  ngOnInit() {
  }

}
