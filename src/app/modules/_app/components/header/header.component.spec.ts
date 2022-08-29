import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { DarkModeService } from '../../services/dark-mode.service';

import { HeaderComponent } from './header.component';

const mockDarkService: Partial<DarkModeService> = {
  getDarkMode$: () => of(true)
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [DarkModeService],
      imports: [BrowserAnimationsModule, FormsModule]
    })
    .overrideProvider(DarkModeService, { useValue: mockDarkService })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
