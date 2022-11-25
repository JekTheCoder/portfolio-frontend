import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveSectionComponent } from './reactive-section.component';

describe('ReactiveSectionComponent', () => {
  let component: ReactiveSectionComponent;
  let fixture: ComponentFixture<ReactiveSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
