import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxSizeService } from './services/box-size.service';
import { ProjectComponent } from './project.component';

@NgModule({
	declarations: [ProjectComponent],
	imports: [CommonModule],
	exports: [ProjectComponent],
	providers: [BoxSizeService],
})
export class ProjectsModule {}
