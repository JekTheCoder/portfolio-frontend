import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { ImageService } from './services/image.service';
import { ResizeObservableFactoryService } from './services/resize-observable-factory.service';
import { ProjectsModule } from './projects/projects.module';
import { PortfolioComponent } from './portfolio.component';
import { NavigatorComponent } from './sections/navigator/navigator.component';
import { ContactMeComponent } from './sections/contact-me/contact-me.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { BackendProjectComponent } from './sections/backend-project/backend-project.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { NgLetDirective } from '@common/directives/ng-let.directive';


@NgModule({
  declarations: [
    PortfolioComponent,
    NavigatorComponent,
    ContactMeComponent,
    ProjectsComponent,
    BackendProjectComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    NgLetDirective,
    FontAwesomeModule,
    MatFormFieldModule,
    MatInputModule,
    ProjectsModule,
  ],
  providers: [ImageService, ResizeObservableFactoryService]
})
export class PortfolioModule { }
