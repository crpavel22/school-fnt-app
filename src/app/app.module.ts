import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {GroupsComponent} from './groups/groups.component';
import {GroupListComponent} from './groups/group-list/group-list.component';
import {GroupDetailComponent} from './groups/group-detail/group-detail.component';
import {GroupItemComponent} from './groups/group-list/group-item/group-item.component';
import {SubjectsComponent} from './subjects/subjects.component';
import {SubjectListComponent} from './subjects/subject-list/subject-list.component';
import {SubjectItemComponent} from './subjects/subject-list/subject-item/subject-item.component';
import {SubjectDetailComponent} from './subjects/subject-detail/subject-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GroupsComponent,
    GroupListComponent,
    GroupDetailComponent,
    GroupItemComponent,
    SubjectsComponent,
    SubjectListComponent,
    SubjectItemComponent,
    SubjectDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
