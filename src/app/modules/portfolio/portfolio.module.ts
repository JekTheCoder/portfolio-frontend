import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { NgLetDirective } from 'src/app/common/directives/ng-let.directive';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';
import { BackendProjectComponent } from './components/backend-project/backend-project.component';
import { SkillsComponent } from './components/skills/skills.component';


@NgModule({
  declarations: [
    PortfolioComponent,
    NavigatorComponent,
    ContactMeComponent,
    ProjectsComponent,
    ProjectComponent,
    BackendProjectComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    NgLetDirective,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class PortfolioModule { }
