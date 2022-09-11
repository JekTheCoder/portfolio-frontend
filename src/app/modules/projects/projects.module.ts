import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './component/project/project.component';
import { BoxSizeService } from './services/box-size.service';



@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule
  ],
  exports: [ProjectComponent],
  providers: [BoxSizeService]
})
export class ProjectsModule { }
