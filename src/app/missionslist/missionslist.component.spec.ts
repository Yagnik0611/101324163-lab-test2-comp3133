import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionslistComponent } from './missionslist.component';

describe('MissionslistComponent', () => {
  let component: MissionslistComponent;
  let fixture: ComponentFixture<MissionslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionslistComponent ]
    })
    .compileComponents();
  });
  

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
