import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevSourceComponent } from './dev-source.component';

describe('DevSourceComponent', () => {
  let component: DevSourceComponent;
  let fixture: ComponentFixture<DevSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DevSourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
