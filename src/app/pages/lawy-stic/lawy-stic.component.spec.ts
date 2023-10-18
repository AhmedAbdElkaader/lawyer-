import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawySticComponent } from './lawy-stic.component';

describe('LawySticComponent', () => {
  let component: LawySticComponent;
  let fixture: ComponentFixture<LawySticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawySticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawySticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
