import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerInfoComponent } from './lawyer-info.component';

describe('LawyerInfoComponent', () => {
  let component: LawyerInfoComponent;
  let fixture: ComponentFixture<LawyerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawyerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
