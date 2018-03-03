import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmanufacturerComponent } from './addmanufacturer.component';

describe('AddmanufacturerComponent', () => {
  let component: AddmanufacturerComponent;
  let fixture: ComponentFixture<AddmanufacturerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmanufacturerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmanufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
