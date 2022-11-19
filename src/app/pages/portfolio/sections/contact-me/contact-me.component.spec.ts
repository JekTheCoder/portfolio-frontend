import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ContactMeComponent } from './contact-me.component';

describe('ContactMeComponent', () => {
	let component: ContactMeComponent;
	let fixture: ComponentFixture<ContactMeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ContactMeComponent],
			imports: [
				ReactiveFormsModule,
				FontAwesomeModule,
				MatFormFieldModule,
				MatInputModule,
				BrowserAnimationsModule,
			],
		}).compileComponents();

		fixture = TestBed.createComponent(ContactMeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
