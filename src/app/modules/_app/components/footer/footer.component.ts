import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [FontAwesomeModule]
})
export class FooterComponent implements OnInit {
	faGithub = faGithub;
	faLinkedin = faLinkedinIn;

	ngOnInit(): void {}
}
