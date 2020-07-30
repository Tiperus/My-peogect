import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLearnPlanComponent } from './my-learn-plan.component';

describe('MyLearnPlanComponent', () => {
  let component: MyLearnPlanComponent;
  let fixture: ComponentFixture<MyLearnPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLearnPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLearnPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
