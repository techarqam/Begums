import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFestComponent } from './add-fest.component';

describe('AddFestComponent', () => {
  let component: AddFestComponent;
  let fixture: ComponentFixture<AddFestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFestComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
