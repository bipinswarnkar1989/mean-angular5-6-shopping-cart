import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmanufacturerComponent } from './editmanufacturer.component';

describe('EditmanufacturerComponent', () => {
  let component: EditmanufacturerComponent;
  let fixture: ComponentFixture<EditmanufacturerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmanufacturerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmanufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
