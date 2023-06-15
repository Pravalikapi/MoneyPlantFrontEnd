import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertlistComponent } from './expertlist.component';

describe('ExpertlistComponent', () => {
  let component: ExpertlistComponent;
  let fixture: ComponentFixture<ExpertlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpertlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
