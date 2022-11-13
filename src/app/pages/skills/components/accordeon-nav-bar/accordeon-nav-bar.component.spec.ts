import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordeonNavBarComponent } from './accordeon-nav-bar.component';

describe('AccordeonNavBarComponent', () => {
  let component: AccordeonNavBarComponent;
  let fixture: ComponentFixture<AccordeonNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordeonNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordeonNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
