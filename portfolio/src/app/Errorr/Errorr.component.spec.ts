/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ErrorrComponent } from './Errorr.component';

describe('ErrorrComponent', () => {
  let component: ErrorrComponent;
  let fixture: ComponentFixture<ErrorrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
