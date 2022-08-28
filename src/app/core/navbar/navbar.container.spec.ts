import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarContainer } from './navbar.container';

describe('NavbarContainer', () => {
  let component: NavbarContainer;
  let fixture: ComponentFixture<NavbarContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
