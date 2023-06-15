import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertspageComponent } from './expertspage.component';

describe('ExpertspageComponent', () => {
  let component: ExpertspageComponent;
  let fixture: ComponentFixture<ExpertspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpertspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
