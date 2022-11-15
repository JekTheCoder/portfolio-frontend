import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';

const routes: Routes = [
	{
		component: PortfolioComponent,
		path: '',
		pathMatch: 'full',
		title: 'Jeshua Hinostroza | portfolio',
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PortfolioRoutingModule {}
