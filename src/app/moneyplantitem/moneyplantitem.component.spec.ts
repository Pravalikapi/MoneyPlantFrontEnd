import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyplantitemComponent } from './moneyplantitem.component';

describe('MoneyplantitemComponent', () => {
  let component: MoneyplantitemComponent;
  let fixture: ComponentFixture<MoneyplantitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyplantitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyplantitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
