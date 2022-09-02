import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './component/project/project.component';



@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule
  ],
  exports: [ProjectComponent]
})
export class ProjectsModule { }
