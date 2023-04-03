import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionsdetailComponent } from './missionsdetail.component';

describe('MissionsdetailComponent', () => {
  let component: MissionsdetailComponent;
  let fixture: ComponentFixture<MissionsdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionsdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



