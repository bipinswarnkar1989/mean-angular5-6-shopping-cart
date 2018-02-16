import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturersComponent } from './manufacturers.component';

describe('ManufacturersComponent', () => {
  let component: ManufacturersComponent;
  let fixture: ComponentFixture<ManufacturersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
