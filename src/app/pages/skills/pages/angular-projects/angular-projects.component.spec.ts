import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularProjectsComponent } from './angular-projects.component';

describe('AngularProjectsComponent', () => {
  let component: AngularProjectsComponent;
  let fixture: ComponentFixture<AngularProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AngularProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
