import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertdetailComponent } from './expertdetail.component';

describe('ExpertdetailComponent', () => {
  let component: ExpertdetailComponent;
  let fixture: ComponentFixture<ExpertdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpertdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
