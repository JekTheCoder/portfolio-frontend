import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GithubAuthBuilderService } from './services/github-auth-builder.service';
import { AuthModule } from '@core/auth/auth.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
	declarations: [NotFoundComponent],
	imports: [CommonModule, RouterModule, AuthModule, HeaderComponent, FooterComponent],
	providers: [GithubAuthBuilderService],
	exports: [HeaderComponent, FooterComponent],
})
export class _AppModule {}
