import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesContainer } from './employees.container';

describe('EmployeesContainer', () => {
  let component: EmployeesContainer;
  let fixture: ComponentFixture<EmployeesContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeesContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeesContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
