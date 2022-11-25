import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepRxjsSectionComponent } from './deep-rxjs-section.component';

describe('DeepRxjsSectionComponent', () => {
  let component: DeepRxjsSectionComponent;
  let fixture: ComponentFixture<DeepRxjsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DeepRxjsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeepRxjsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
