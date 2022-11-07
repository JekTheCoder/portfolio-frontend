import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendProjectComponent } from './backend-project.component';

describe('BackendProjectComponent', () => {
  let component: BackendProjectComponent;
  let fixture: ComponentFixture<BackendProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackendProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
