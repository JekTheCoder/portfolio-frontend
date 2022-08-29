import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { NgLetDirective } from 'src/app/common/directives/ng-let.directive';
import { ContactMeComponent } from './components/contact-me/contact-me.component';


@NgModule({
  declarations: [
    PortfolioComponent,
    NavigatorComponent,
    ContactMeComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    NgLetDirective
  ]
})
export class PortfolioModule { }
